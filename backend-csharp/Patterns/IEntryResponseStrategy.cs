
/// new reply means ONE new class. No existing class changes.
public interface IEntryResponseStrategy
{
    ResponseTone Tone { get; }

    string Respond(JournalEntry entry);
}
