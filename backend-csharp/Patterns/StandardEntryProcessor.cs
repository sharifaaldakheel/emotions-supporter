// Strategy & Factory

// send entry to response strategy factory 
public class StandardEntryProcessor : EntryProcessor
{
    private readonly EntryStore _store;

    public StandardEntryProcessor(EntryStore store)
    {
        _store = store;
    }

    protected override bool Validate(JournalEntry? entry)
    {
        return entry != null && entry.Intensity >= 1 && entry.Intensity <= 10;
    }

// SelectStrategy asks the Factory to decide
    protected override IEntryResponseStrategy SelectStrategy(JournalEntry entry)
    {
        return ResponseStrategyFactory.Create(entry);
    }

    protected override void Persist(JournalEntry entry)
    {
        _store.Add(entry);
    }

    protected override SaveResult Confirm(ResponseTone tone, string message)
    {
        return new SaveResult(true, tone, message);
    }
}
