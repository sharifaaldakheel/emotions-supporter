# Emotion Supporter 💙

An Arabic-first emotional journaling app that helps users reflect on their feelings. Record your mood, its intensity, what helped, and a personal note—then revisit meaningful memories whenever you need them.

🌐 **Live Demo:** [https://emotions-supporter.vercel.app](https://emotions-supporter.vercel.app/)
👩‍💻 **Author:** [Sharifah AlDakheel](https://www.linkedin.com/in/sharifa-aldakheel/) · [GitHub](https://github.com/sharifaaldakheel)

---

## ✨ Overview

Emotion Supporter was developed as part of a **Design Patterns** course.

The project consists of two parts:

* **C# / .NET Console Application** — the core implementation where the design patterns and SOLID principles are applied.
* **React Frontend** — an Arabic, right-to-left interface that visualizes the same concept with a modern user experience.

The frontend demonstrates the application's functionality, while the backend showcases clean software architecture and object-oriented design.

---

## 📁 Project Structure

```text
emotion-supporter/
├── backend-csharp/     # C# / .NET console application (core logic)
└── frontend-react/     # React + Vite Arabic RTL interface
```

---

## 🏗️ Design Patterns

The backend applies three classic design patterns to keep the application extensible and maintainable.

### Template Method

Defines the fixed workflow for processing a journal entry:

```
Validate → Choose Response → Save Entry → Confirm
```

**File:** `Patterns/EntryProcessor.cs`

---

### Factory

Determines which response strategy should be used based on the user's emotional state.

**File:** `Patterns/ResponseStrategyFactory.cs`

---

### Strategy

Provides different response behaviors depending on the detected mood.

* Low mood
* Neutral mood
* Positive mood

**File:** `Patterns/IEntryResponseStrategy.cs`

---

### In One Sentence

* **Template Method** decides **when** each step happens.
* **Factory** decides **which** strategy to use.
* **Strategy** decides **what** response is generated.

---

## 🎯 SOLID Principles

The backend follows all five SOLID principles:

* **Single Responsibility** – Each class has one clear responsibility (processing, selecting, responding, or storing).
* **Open/Closed** – New response behaviors can be added without modifying existing code.
* **Liskov Substitution** – Any processor implementation can replace its base abstraction safely.
* **Interface Segregation** – Interfaces expose only the functionality required by their clients.
* **Dependency Inversion** – The processor depends on abstractions rather than concrete implementations.

> **Note:** The memory resurfacing feature is intentionally implemented as a regular service instead of a design pattern, demonstrating that patterns should only be used when they provide real architectural value.

---

## 🚀 Running the Backend

```bash
cd backend-csharp
dotnet run
```

---

## 💻 Running the Frontend

```bash
cd frontend-react
npm install
npm run dev
```

---

## 🛠️ Tech Stack

* C#
* .NET
* React
* Vite

### Features

* Arabic-first experience
* Right-to-left (RTL) interface
* Responsive design optimized for iPhone 16/17 Pro
* Clean architecture using:

  * Template Method
  * Factory
  * Strategy
  * SOLID principles

---

## 🙏 Acknowledgements

This project was built as part of the **Design Patterns** course at **Tuwaiq Academy**, under the guidance of trainer **Atheer Alenzi**.
