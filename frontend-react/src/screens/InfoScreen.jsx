import { INK, BACK_BTN } from "../logic/data.js";
import tuwaiq from "../assets/tuwaiq.png";

const FONT = "'IBM Plex Sans Arabic', system-ui, sans-serif";

export default function InfoScreen({ onBack }) {
  return (
    <>
      <button onClick={onBack} style={BACK_BTN}>
        ›
      </button>

      <div
        style={{
          position: "absolute",
          inset: 0,
          overflowY: "auto",
          padding: "60px 20px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* project card */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 24,
            padding: "34px 28px",
            width: 300,
            height: 420,
            boxShadow: "0 10px 30px rgba(0,0,0,.08)",
            marginTop: 40,
          }}
        >
          <h1
            style={{
              textAlign: "right",
              fontWeight: 700,
              fontSize: 22,
              lineHeight: 1.5,
              color: INK,
              margin: 0,
              fontFamily: FONT,
            }}
          >
            مشروع أنماط التصميم
            <br />
            في تطوير البرمجيات
          </h1>

          <p
            style={{
              textAlign: "right",
              fontSize: 15,
              lineHeight: 1.8,
              color: INK,
              marginTop: 12,
              fontFamily: FONT,
            }}
          >
            مشروع C# .NET لتدوين المشاعر، يبرز تطبيق أنماط التصميم Template
            Method وFactory وStrategy مع مبادئ SOLID.
          </p>

          <h6
            style={{
              textAlign: "right",
              fontSize: 15,
              color: INK,
              margin: "28px 0 0",
              fontFamily: FONT,
            }}
          >
            تنفيذ: شريفة الدخيل
          </h6>

          <h6
            style={{
              textAlign: "right",
              fontSize: 15,
              color: INK,
              margin: "12px 0 0",
              fontFamily: FONT,
            }}
          >
            بقيادة المدربة: أثير العنزي
          </h6>

          <img
            src={tuwaiq}
            alt="Tuwaiq Academy"
            style={{
              display: "block",
              height: 36,
              margin: "70px auto 0",
              objectFit: "contain",
            }}
          />
          <p
            style={{
              textAlign: "center",
              fontSize: 15,
              color: INK,
              margin: "8px 0 0",
              fontFamily: FONT,
            }}
          >
            July 2026{" "}
          </p>
        </div>

        <div style={{ display: "flex", gap: 18, marginTop: 26 }}>
          <a
            href="https://github.com/sharifaaldakheel"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: INK,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/sharifa-aldakheel/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: INK,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#fff"
              aria-hidden="true"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9Z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
