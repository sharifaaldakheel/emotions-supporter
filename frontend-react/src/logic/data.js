import happy from "../assets/happy.png";
import calm from "../assets/calm.png";
import anxious from "../assets/anxious.png";
import angry from "../assets/angry.png";
import sad from "../assets/sad.png";

import walk from "../assets/walk.jpeg";
import coffee from "../assets/coffee.jpeg";
import coffee2 from "../assets/coffee2.jpg";
import random from "../assets/random.jpeg";
import random1 from "../assets/random1.jpg";
import random2 from "../assets/random2.jpg";
import random3 from "../assets/random3.jpg";

export const INK = "#2E2E33";
export const PRIMARY = "#A6ACDC";

export const MOODS = [
  { name: "سعيد",   key: "Joyful",  img: happy,   tint: "#F9DD7E" },
  { name: "متأقلم", key: "Calm",    img: calm,    tint: "#C1D37B" },
  { name: "قلق",    key: "Anxious", img: anxious, tint: "#A6ACDC" },
  { name: "غاضب",   key: "Angry",   img: angry,   tint: "#E8A29E" },
  { name: "حزين",   key: "Sad",     img: sad,     tint: "#F0C56A" },
];

export const HELP_OPTIONS = [
  { label: "قهوة",     color: "#E8C39E" },
  { label: "مشي",      color: "#C0DCA6" },
  { label: "الصحة",    color: "#A6ACDC" },
  { label: "الأصدقاء", color: "#C1D37B" },
  { label: "العائلة",  color: "#C9E0DD" },
  { label: "السفر",    color: "#F9DD7E" },
  { label: "الطقس",    color: "#A6ACDC" },
];

export const IMAGES = { walk, coffee, coffee2, random, random1, random2, random3 };
export const FRAME_W = 393;
export const FRAME_H = 852;
const FONT = "'IBM Plex Sans Arabic', system-ui, sans-serif";


export const PRIMARY_BTN = {
  position: "absolute", bottom: 50, left: 20, right: 20,
  padding: 16, borderRadius: 16, border: "none",
  background: PRIMARY, color: INK, fontWeight: 700, fontSize: 20,
  fontFamily: FONT, cursor: "pointer",
};

export const BACK_BTN = {
  position: "absolute", top: 20, left: 20, width: 40, height: 40,
  borderRadius: "50%", border: "1.5px solid #E4DCCB",
  background: "rgba(255,255,255,.6)", color: INK,
  fontSize: 22, lineHeight: "34px", textAlign: "center",
  cursor: "pointer", zIndex: 6, padding: 0,
};

export const SCROLL_AREA = {
  position: "absolute", inset: 0, overflowY: "auto",
  padding: "80px 20px 120px",
};