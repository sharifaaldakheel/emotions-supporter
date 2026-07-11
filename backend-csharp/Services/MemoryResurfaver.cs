public class ResurfacingView
{
    public List<string> TopHelped { get; set; } = new List<string>();
    public JournalEntry? Memory { get; set; }
}

/// Builds what to hand back on a hard day: the things that helped most often
/// before, plus one good memory to revisit.
// plain service.
public class MemoryResurfacer
{
    private readonly EntryStore _store;

    public MemoryResurfacer(EntryStore store)
    {
        _store = store;
    }

    public ResurfacingView Build()
    {
        // Count how often each thing helped, keep the top three.
        Dictionary<string, int> counts = new Dictionary<string, int>();
        foreach (JournalEntry entry in _store.Items)
        {
            foreach (string help in entry.Helped)
            {
                if (counts.ContainsKey(help))
                {
                    counts[help] = counts[help] + 1;
                }
                else
                {
                    counts[help] = 1;
                }
            }
        }

        List<string> topHelped = counts
            .OrderByDescending(pair => pair.Value)
            .Take(3)
            .Select(pair => pair.Key)
            .ToList();

        // The strongest good memory to hand back.
        JournalEntry? memory = null;
        foreach (JournalEntry entry in _store.Items)
        {
            if (entry.IsLow)
            {
                continue;
            }

            if (memory == null || entry.Intensity > memory.Intensity)
            {
                memory = entry;
            }
        }

        ResurfacingView view = new ResurfacingView();
        view.TopHelped = topHelped;
        view.Memory = memory;
        return view;
    }
}
