public static class Program
{
    private static readonly string[] HelpOptions =
    {
        "coffee", "a walk", "family", "rest", "music"
    };

    public static void Main()
    {
        Console.OutputEncoding = System.Text.Encoding.UTF8;

        EntryStore store = new EntryStore();
        store.SeedHistory();

        EntryProcessor processor = new StandardEntryProcessor(store);
        MemoryResurfacer resurfacer = new MemoryResurfacer(store);

        Console.WriteLine();
        Console.WriteLine("  Emotion Supporter");
        Console.WriteLine("  a place to check in with yourself");

        bool running = true;
        while (running)
        {
            Console.WriteLine();
            Console.WriteLine("  ─────────────────────────────");
            Console.WriteLine("  1  How are you feeling?");
            Console.WriteLine("  2  See my history");
            Console.WriteLine("  3  Exit");
            Console.Write("  > ");

            string? choice = Console.ReadLine();

            if (choice == "1")
            {
                NewEntry(processor, resurfacer);
            }
            else if (choice == "2")
            {
                ShowHistory(store);
            }
            else if (choice == "3")
            {
                running = false;
            }
            else
            {
                Console.WriteLine("  Please choose 1, 2 or 3.");
            }
        }

        Console.WriteLine();
        Console.WriteLine("  Take care of yourself.");
        Console.WriteLine();
    }


    // build an entry from the user, then save it
    private static void NewEntry(EntryProcessor processor, MemoryResurfacer resurfacer)
    {
        Console.WriteLine();
        Console.WriteLine("  New entry");
        Console.WriteLine("  ─────────");

        Mood? mood = AskMood();
        int intensity = AskIntensity();
        string? reason = AskText("  What's behind this? (optional, Enter to skip)");
        List<string> helped = AskHelped();
        string? note = AskText("  A note? (optional, Enter to skip)");

        JournalEntry? entry = null;
        if (mood != null)
        {
            entry = new JournalEntry(mood.Value, intensity, reason, helped, note);
        }

        // ── ONE call. Inside: Template Method > Factory > Strategy
        SaveResult result = processor.Save(entry);

        Console.WriteLine();
        if (!result.Ok)
        {
            Console.WriteLine("  " + result.Message);
            return;
        }

        Console.WriteLine("  " + result.Message);

        if (result.ShouldResurface)
        {
            ShowResurfacing(resurfacer);
        }
    }

    //saved moment, only after a low entry
    private static void ShowResurfacing(MemoryResurfacer resurfacer)
    {
        ResurfacingView view = resurfacer.Build();

        Console.WriteLine();
        Console.WriteLine("  ─────────────────────────────");
        Console.WriteLine("The last few times you felt like this,");
        Console.WriteLine("these helped you before:");
        Console.WriteLine();

        if (view.TopHelped.Count == 0)
        {
            Console.WriteLine("be kind to yourself");
        }
        else
        {
            foreach (string help in view.TopHelped)
            {
                Console.WriteLine("      · " + help);
            }
        }

        if (view.Memory != null)
        {
            Console.WriteLine();
            Console.WriteLine("A memory worth revisiting:");
            Console.WriteLine("      " + view.Memory);
            if (view.Memory.Note != null)
            {
                Console.WriteLine("      \"" + view.Memory.Note + "\"");
            }
        }

        Console.WriteLine();
        Console.WriteLine("  ─────────────────────────────");
        Console.Write("  Press Enter when you're okay for now… ");
        Console.ReadLine();
    }

    //history
    private static void ShowHistory(EntryStore store)
    {
        Console.WriteLine();
        Console.WriteLine("  History (newest first)");
        Console.WriteLine("  ──────────────────────");

        if (store.Items.Count == 0)
        {
            Console.WriteLine("  No entries yet.");
            return;
        }

        foreach (JournalEntry entry in store.Items)
        {
            Console.WriteLine("  " + entry);
        }
    }

    //Input helpers
    private static Mood? AskMood()
    {
        Console.WriteLine();
        Console.WriteLine("  How do you feel?");

        Mood[] moods = (Mood[])Enum.GetValues(typeof(Mood));
        for (int i = 0; i < moods.Length; i++)
        {
            Console.WriteLine($"    {i + 1}  {moods[i]}");
        }

        Console.Write("  > ");
        string? input = Console.ReadLine();

        int choice;
        if (int.TryParse(input, out choice) && choice >= 1 && choice <= moods.Length)
        {
            return moods[choice - 1];
        }

        // Returning null lets the processor's Validate() step reject it.
        return null;
    }

    private static int AskIntensity()
    {
        Console.Write("  How strongly, 1 to 10? > ");
        string? input = Console.ReadLine();

        int value;
        if (int.TryParse(input, out value))
        {
            return value;
        }

        return 0;   // invalid on purpose — Validate() will catch it
    }

    private static string? AskText(string prompt)
    {
        Console.Write(prompt + " > ");
        string? input = Console.ReadLine();

        if (string.IsNullOrWhiteSpace(input))
        {
            return null;
        }

        return input.Trim();
    }

    private static List<string> AskHelped()
    {
        Console.WriteLine();
        Console.WriteLine("  What helped today? (numbers separated by commas, Enter to skip)");
        for (int i = 0; i < HelpOptions.Length; i++)
        {
            Console.WriteLine($"    {i + 1}  {HelpOptions[i]}");
        }

        Console.Write("  > ");
        string? input = Console.ReadLine();

        List<string> chosen = new List<string>();
        if (string.IsNullOrWhiteSpace(input))
        {
            return chosen;
        }

        string[] parts = input.Split(',');
        foreach (string part in parts)
        {
            int index;
            if (int.TryParse(part.Trim(), out index) && index >= 1 && index <= HelpOptions.Length)
            {
                string option = HelpOptions[index - 1];
                if (!chosen.Contains(option))
                {
                    chosen.Add(option);
                }
            }
        }

        return chosen;
    }
}
