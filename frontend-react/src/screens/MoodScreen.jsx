import { useState } from "react";
import Img from "../components/Img.jsx";
import { INK, MOODS, HELP_OPTIONS, PRIMARY_BTN, BACK_BTN, SCROLL_AREA } from "../logic/data.js";
import { processEntry } from "../logic/strategy.js";

const FONT = "'IBM Plex Sans Arabic', system-ui, sans-serif";

export default function MoodScreen({ onBack, onSaved }) {
  const [mood, setMood] = useState(null);
  const [intensity, setIntensity] = useState(3);
  const [helped, setHelped] = useState([]);
  const [note, setNote] = useState("");
  const [error, setError] = useState(null);

  const toggleHelp = (l) =>
    setHelped((p) => (p.includes(l) ? p.filter((x) => x !== l) : [...p, l]));

  const save = () => {
    const result = processEntry({ mood, intensity });
    if (!result.ok) { setError(result.message); return; }
    onSaved(result);
  };

  const h2 = { textAlign: "right", fontWeight: 700, fontSize: 19, color: INK, fontFamily: FONT };

  return (
    <>
      <button onClick={onBack} style={BACK_BTN}>›</button>

      <div style={SCROLL_AREA}>
        <h2 style={{ ...h2, marginBottom: 16 }}>شعوري اليوم كان</h2>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {MOODS.map((m) => (
            <button key={m.key} onClick={() => setMood(m.key)}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, transform: mood === m.key ? "scale(1.1)" : "scale(1)", transition: "transform .15s", padding: 0 }}>
              <Img name={m.img} tint={m.tint}
                style={{ width: 60, height: 60, borderRadius: "50%", boxShadow: mood === m.key ? "0 0 0 3px #FAF2E0, 0 0 0 6px #A6ACDC" : "none" }} />
              <span style={{ fontSize: 15, fontWeight: 700, color: INK, fontFamily: FONT }}>{m.name}</span>
            </button>
          ))}
        </div>

        <input type="range" min="1" max="10" value={intensity}
          onChange={(e) => setIntensity(+e.target.value)} className="rng" style={{ marginTop: 24 }} />
        <div style={{ textAlign: "left", fontSize: 14, fontWeight: 700, marginTop: 4, color: INK, fontFamily: FONT }}>{intensity}/10</div>

        <h2 style={{ ...h2, margin: "24px 0 12px" }}>ساعدني في هذا اليوم</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {HELP_OPTIONS.map((hp) => {
            const on = helped.includes(hp.label);
            return (
              <button key={hp.label} onClick={() => toggleHelp(hp.label)}
                style={{ padding: "8px 16px", borderRadius: 12, border: "none", background: hp.color, color: INK, fontSize: 13, fontWeight: 600, fontFamily: FONT, cursor: "pointer", opacity: on ? 1 : 0.6, boxShadow: on ? "0 0 0 2.5px #45485C" : "none" }}>
                {hp.label}
              </button>
            );
          })}
        </div>

        <h2 style={{ ...h2, margin: "45px 0 12px" }}>مساحة إختيارية للتعبير</h2>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={4}
          style={{ width: "100%", boxSizing: "border-box", borderRadius: 16, padding: 12, fontSize: 14, fontFamily: FONT, outline: "none", resize: "none", background: "#fff", border: "1px solid #EADFC7", color: INK }} />

        <div style={{ marginTop: 12, borderRadius: 16, padding: "16px 0", textAlign: "center", fontSize: 13, border: "1.5px dashed #C9BFA8", color: "#9A927F", background: "#fff", fontFamily: FONT }}>
          رفع صورة — قريبًا 📷
        </div>

        {error && <p style={{ textAlign: "center", fontSize: 13, marginTop: 12, fontWeight: 600, color: "#C05252", fontFamily: FONT }}>{error}</p>}
      </div>

      <button onClick={save} style={PRIMARY_BTN}>احفظ شعورك لليوم</button>
    </>
  );
}