public class LowMoodResponseStrategy : IEntryResponseStrategy
{
    public ResponseTone Tone => ResponseTone.Low;

    public string Respond(JournalEntry entry)
    {
        return "That sounds heavy. It's saved — be gentle with yourself today.";
    }
}
