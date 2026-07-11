import { useState } from "react";
import TodayScreen from "./screens/TodayScreen.jsx";
import MoodScreen from "./screens/MoodScreen.jsx";
import RevisitScreen from "./screens/RevisitScreen.jsx";
import InfoScreen from "./screens/InfoScreen.jsx";
import { FRAME_W, FRAME_H } from "./logic/data.js";

export default function App() {
  const [screen, setScreen] = useState("today");

  const outer = {
    minHeight: "100vh",
    background: "#E9E9EF",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "24px 0",
  };

  const frame = {
    position: "relative",
    width: FRAME_W,
    height: FRAME_H,
    overflow: "hidden",
    borderRadius: 40,
    background: "linear-gradient(155deg, #FAFBFC, #FAF2E0)",
    color: "#2E2E33",
    direction: "rtl",
    fontFamily: "'IBM Plex Sans Arabic', system-ui, sans-serif",
    boxShadow: "0 24px 60px rgba(30,40,70,.25)",
  };

  return (
    <div style={outer}>
      <div style={frame}>
        {screen === "today" && <TodayScreen onLog={() => setScreen("mood")} />}
        {screen === "mood" && (
          <MoodScreen
            onBack={() => setScreen("today")}
            onSaved={() => setScreen("revisit")}
          />
        )}
        {screen === "revisit" && (
          <RevisitScreen
            onBack={() => setScreen("mood")}
            onHome={() => setScreen("today")}
            onInfo={() => setScreen("info")}
          />
        )}
        {screen === "info" && (
          <InfoScreen onBack={() => setScreen("revisit")} />
        )}{" "}
      </div>
    </div>
  );
}
