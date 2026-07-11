import Img from "./Img.jsx";

export default function MemoryCard({ bg, w, h, layout, images, text, date, style }) {
  const textColor = "#2E2E33";
  const dateColor = "rgba(46,46,51,.6)";

  return (
    <div style={{ width: w, height: h, background: bg, borderRadius: 20, padding: 6, overflow: "hidden", boxShadow: "0 10px 26px rgba(0,0,0,.12)", boxSizing: "border-box", ...style }}>
      {layout === "single" && (
        <Img name={images[0]} tint="#d9cbb0" style={{ width: 177, height: 165, borderRadius: 14, display: "block", margin: "0 auto" }} />
      )}

      {layout === "greenPair" && (
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          <Img name={images[0]} tint="#cfe0c0" style={{ width: 124, height: 163, borderRadius: 14 }} />
          <Img name={images[1]} tint="#b9c7a2" style={{ width: 163, height: 163, borderRadius: 14 }} />
        </div>
      )}

      {layout === "yellowTrio" && (
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 5.47 }}>
            <Img name={images[1]} tint="#c9ddd8" style={{ width: 139, height: 98, borderRadius: 14 }} />
            <Img name={images[2]} tint="#e0d3b6" style={{ width: 139, height: 82.53, borderRadius: 14 }} />
          </div>
          <Img name={images[0]} tint="#cfe0c0" style={{ width: 139.19, height: 186, borderRadius: 14 }} />
        </div>
      )}

      <p style={{ textAlign: "center", fontWeight: 600, fontSize: 12.5, lineHeight: 1.6, marginTop: 8, padding: "0 6px", color: textColor }}>
        {text}
      </p>
      <p style={{ textAlign: "center", fontSize: 11, marginTop: 4, color: dateColor }}>{date}</p>
    </div>
  );
}