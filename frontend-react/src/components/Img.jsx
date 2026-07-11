import { useState } from "react";

//layout never breaks 
export default function Img({ name, tint, className, style }) {
  const [broken, setBroken] = useState(false);

  if (broken || !name) {
    return <div className={className} style={{ ...style, background: tint || "#EADFC7" }} />;
  }

  return (
    <img
      src={name}
      alt=""
      onError={() => setBroken(true)}
      className={className}
      style={{ ...style, objectFit: "cover" }}
    />
  );
}
