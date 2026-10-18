# Poultry Digital Twin

Prototype of a Digital Twin web application for poultry production.

---

## Objective

This project provides a visual representation of a poultry house and the animals located inside it.

The application is a mockup intended for future integration with a database and real sensor information.

Features:

- Visualization of poultry houses
- Visualization of chicken positions
- Interactive animal selection
- Individual animal information
- Feeding history charts
- Scalable architecture for Digital Twins

---

## Technologies

- React
- TypeScript
- Vite
- Recharts

---

## Installation

Install dependencies:

```bash
npm install
```

Run development mode:

```bash
npm run dev
```

---

## Project Structure

```text
src/
├── components/
│   ├── BarnView.tsx
│   ├── Chicken.tsx
│   └── ChickenDetails.tsx
│
├── data/
│   └── mockData.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## Current Mock Data

Each chicken contains:

- ID
- Position X
- Position Y
- Temperature
- Weight
- Age
- Feeding History

Example:

```json
{
  "id": 1,
  "temperature": 41.2,
  "weight": 2.3,
  "age": 45
}
```

---

## Future Development

Planned integrations:

- PostgreSQL or SQLite
- Camera systems
- AI-based disease detection
- Digital Twin analytics
- Predictive health models

---
