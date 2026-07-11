public class PositiveResponseStrategy : IEntryResponseStrategy
{
    public ResponseTone Tone => ResponseTone.Positive;

    public string Respond(JournalEntry entry)
    {
        return "Love that. This good moment is saved.";
    }
}
