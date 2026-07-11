import MemoryCard from "../components/MemoryCard.jsx";
import {
  INK,
  IMAGES,
  PRIMARY_BTN,
  BACK_BTN,
  SCROLL_AREA,
} from "../logic/data.js";

const FONT = "'IBM Plex Sans Arabic', system-ui, sans-serif";

export default function RevisitScreen({ onBack, onHome, onInfo  }) {
  return (
    <>
      <button onClick={onBack} style={BACK_BTN}>
        ›
      </button>

      <div style={SCROLL_AREA}>
        <h1
          style={{
            textAlign: "right",
            fontWeight: 700,
            fontSize: 24,
            marginBottom: 20,
            color: INK,
            fontFamily: FONT,
          }}
        >
          ذكريات تستحق الزيارة
        </h1>

        <MemoryCard
          bg="#8E9867"
          w={327}
          h={258}
          layout="greenPair"
          images={[IMAGES.coffee, IMAGES.coffee2]}
          text="“تحمل الصداقة صدى صوت الذات في قلبها. يمكن للصديق أن يردّ لك صوتك، حين تخفت كل الأصوات بداخلك”"
          date="22 NOV 2025"
          style={{ marginBottom: 22, marginLeft: "auto", marginRight: "auto" }}
        />

        <MemoryCard
          bg="#F9DD7E"
          w={327}
          h={258}
          layout="yellowTrio"
          images={[IMAGES.random3, IMAGES.random2, IMAGES.random]}
          text="“لحظات شاعرية من حياة عادية”"
          date="2 NOV 2025"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>

      <button onClick={onHome} style={PRIMARY_BTN}>
        الصفحة الرئيسية
      </button>

      <button onClick={onInfo}
        style={{ position: "absolute", bottom: 25, left: 20, right: 20, background: "none", border: "none", color: INK, fontWeight: 600, fontSize: 13, fontFamily: FONT, cursor: "pointer", textDecoration: "underline" }}>
        معلومات المشروع
      </button>
    </>
  );
}
