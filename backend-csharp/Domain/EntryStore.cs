// Holds the entries in memory, newest first.
public class EntryStore
{
    public List<JournalEntry> Items { get; } = new List<JournalEntry>();

    public void Add(JournalEntry entry)
    {
        // Insert at 0 so the list is always newest-first.
        Items.Insert(0, entry);
    }

    /// <summary>A few past entries so the resurfacing demo has history to draw on.</summary>
    public void SeedHistory()
    {
        Add(new JournalEntry(Mood.Okay, 5, "long shift",
            new List<string> { "coffee" }, null, DateTime.Now.AddDays(-4)));

        Add(new JournalEntry(Mood.Joyful, 8, "beach morning",
            new List<string> { "a walk", "family" }, "quiet, warm, exactly enough.", DateTime.Now.AddDays(-3)));

        Add(new JournalEntry(Mood.Calm, 6, "quiet morning",
            new List<string> { "coffee" }, "eased into the day", DateTime.Now.AddDays(-1)));
    }
}
