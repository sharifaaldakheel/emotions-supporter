//Factory will read entry, then decide which stratgry return
public static class ResponseStrategyFactory
{
    public static IEntryResponseStrategy Create(JournalEntry entry)
    {

        if (entry.IsLow)
        {
            return new LowMoodResponseStrategy();
        }

        if (entry.Mood == Mood.Joyful)
        {
            return new PositiveResponseStrategy();
        }

        return new NeutralResponseStrategy();
    }
}
