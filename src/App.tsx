import { useState } from "react";

import BarnView from "./components/BarnView";
import ChickenDetails from "./components/ChickenDetails";

import {
  barnData,
  Chicken,
} from "./data/mockData";

export default function App() {
  const [selectedChicken, setSelectedChicken] =
    useState<Chicken | null>(null);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "20px",
        padding: "20px",
      }}
    >
      <BarnView
        barn={barnData}
        onSelectChicken={setSelectedChicken}
      />

      <ChickenDetails
        chicken={selectedChicken}
      />
    </div>
  );
}