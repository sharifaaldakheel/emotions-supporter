public class NeutralResponseStrategy : IEntryResponseStrategy
{
    public ResponseTone Tone => ResponseTone.Neutral;

    public string Respond(JournalEntry entry)
    {
        return "Logged. Thanks for checking in with yourself.";
    }
}
