// What the processor hands back after a save attempt.
public class SaveResult
{
    public bool Ok { get; }
    public ResponseTone Tone { get; }
    public string Message { get; }

    public SaveResult(bool ok, ResponseTone tone, string message)
    {
        Ok = ok;
        Tone = tone;
        Message = message;
    }

    public bool ShouldResurface => Ok && Tone == ResponseTone.Low;
}
