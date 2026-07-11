
//  This file is the JavaScript = C# codes

//    pickStrategy(entry)  ≈  ResponseStrategyFactory.Create(entry) = FACTORY
//    the returned object  ≈  IEntryResponseStrategy = STRATEGY
//    processEntry(entry)  ≈  EntryProcessor.Save(entry)  = TEMPLATE METHOD


export function isLow(entry) {
  return (
    entry.intensity <= 4 ||
    entry.mood === "Anxious" ||
    entry.mood === "Sad" ||
    entry.mood === "Angry"
  );
}

// ── FACTORY: choose the reply strategy for an entry
export function pickStrategy(entry) {
  if (isLow(entry)) {
    return {
      tone: "low",
      respond: () => "تم الحفظ. اعتنِ بنفسك اليوم",
    };
  }
  if (entry.mood === "Joyful") {
    return {
      tone: "positive",
      respond: () => "تم حفظ اللحظة",
    };
  }
  return {
    tone: "neutral",
    respond: () => "نتمنى لك يومًا هادئًا",
  };
}

// ── TEMPLATE METHOD: fixed order — validate → choose → respond → confirm ──
export function processEntry(entry) {
  // 1 validate
  if (!entry || !entry.mood || entry.intensity < 1 || entry.intensity > 10) {
    return { ok: false, message: "الرجاء اختيار شعور أولًا." };
  }
  // 2 choose (Factory → Strategy)
  const strategy = pickStrategy(entry);
  // 3 respond
  const message = strategy.respond(entry);
  // 4 confirm
  return { ok: true, tone: strategy.tone, message };
}
