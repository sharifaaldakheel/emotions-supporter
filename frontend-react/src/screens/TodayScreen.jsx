import MemoryCard from "../components/MemoryCard.jsx";
import { INK, IMAGES, PRIMARY_BTN } from "../logic/data.js";

export default function TodayScreen({ onLog }) {
  return (
    <>
      {/* E8C39E — X133 Y92 rotate 0 */}
      <MemoryCard
        bg="#E8C39E" w={189} h={258} layout="single" images={[IMAGES.walk]}
        text="“يوم مليء بالإمتنان”" date="5 MAR 2026"
        style={{ position: "absolute", left: 133, top: 92, transform: "rotate(0deg)", zIndex: 1 }}
      />

      {/* F9DD7E — X20 Y285 rotate 3.62 */}
      <MemoryCard
        bg="#F9DD7E" w={189} h={258} layout="single" images={[IMAGES.random]}
        text="“لحظات شاعرية من حياة عادية”" date="2 NOV 2025"
        style={{ position: "absolute", left: 20, top: 285, transform: "rotate(3.62deg)", zIndex: 2 }}
      />

      {/* 8E9867 — X169 Y315 rotate -4.66 */}
      <MemoryCard
        bg="#8E9867" w={189} h={258} layout="single" images={[IMAGES.coffee]}
        text="“تحمل الصداقة صدى صوت الذات في قلبها”" date="22 NOV 2025"
        style={{ position: "absolute", left: 169, top: 315, transform: "rotate(-4.66deg)", zIndex: 3 }}
      />

      <h1 style={{ position: "absolute", top: 680, right: 20, left: 20, textAlign: "right", fontWeight: 700, fontSize: 26, color: INK, margin: 0 }}>
        كيف كان يومك؟
      </h1>

      <button onClick={onLog} style={PRIMARY_BTN}>سجّل شعور اليوم</button>
    </>
  );
}