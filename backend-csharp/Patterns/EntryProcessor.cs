// TEMPLATE METHOD, order must never change

public abstract class EntryProcessor
{
    public SaveResult Save(JournalEntry? entry)
    {
        if (!Validate(entry))
        {
            return new SaveResult(false, ResponseTone.Neutral,
                "Please pick a mood, and an intensity from 1 to 10.");
        }

        // Step 2 — the Factory returns a Strategy, the Strategy writes the reply.
        IEntryResponseStrategy strategy = SelectStrategy(entry!);
        string message = strategy.Respond(entry!);

        Persist(entry!);

        return Confirm(strategy.Tone, message);
    }

    // steps, filled in by a subclass.
    protected abstract bool Validate(JournalEntry? entry);
    protected abstract IEntryResponseStrategy SelectStrategy(JournalEntry entry);
    protected abstract void Persist(JournalEntry entry);
    protected abstract SaveResult Confirm(ResponseTone tone, string message);
}
