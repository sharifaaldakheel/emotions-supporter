// One saved entry: how you felt, how strongly, why, and what helped.
public class JournalEntry
{
    public Mood Mood { get; }
    public int Intensity { get; }
    public string? Reason { get; }
    public List<string> Helped { get; }
    public string? Note { get; }
    public DateTime CreatedAt { get; }

    public JournalEntry(
        Mood mood,
        int intensity,
        string? reason = null,
        List<string>? helped = null,
        string? note = null,
        DateTime? createdAt = null)
    {
        Mood = mood;
        Intensity = intensity;
        Reason = reason;
        Helped = helped ?? new List<string>();
        Note = note;
        CreatedAt = createdAt ?? DateTime.Now;
    }

    ///A hard entry: low intensity, or an anxious / sad mood.
    public bool IsLow => Intensity <= 4 || Mood == Mood.Anxious || Mood == Mood.Sad;

    public override string ToString()
    {
        string reason = Reason == null ? "" : " · " + Reason;
        return $"{CreatedAt:dd MMM HH:mm}  {Mood} · {Intensity}/10{reason}";
    }
}
