import { useState } from "react";

import BarnView from "./components/BarnView";
import ChickenDetails from "./components/ChickenDetails";
import FarmCard from "./components/FarmCard";
import SimulationControls from "./components/SimulationControls";
import EnvironmentPanel from "./components/EnvironmentPanel";

import { Chicken } from "./data/types";

import { farm1 } from "./data/farm1";
import { farm2 } from "./data/farm2";
import { farm3 } from "./data/farm3";

export default function App() {
  const farms = [
    farm1,
    farm2,
    farm3,
  ];

  const [selectedFarm, setSelectedFarm] =
    useState(farms[0]);

  const [selectedChicken, setSelectedChicken] =
    useState<Chicken | null>(null);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
        }}
      >
        Poultry Digital Twin
      </h1>

      {/* FARM SELECTOR */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {farms.map((farm) => (
          <FarmCard
            key={farm.id}
            farm={farm}
            selected={selectedFarm.id === farm.id}
            onClick={() => {
              setSelectedFarm(farm);
              setSelectedChicken(null);
            }}
          />
        ))}
      </div>

      {/* SIMULATION CONTROLS */}

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "20px",
          boxShadow:
            "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <SimulationControls />
      </div>

      {/* MAIN CONTENT */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        {/* LEFT PANEL */}

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "15px",
            boxShadow:
              "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>{selectedFarm.name}</h2>

          <p>
            Dimensions: {selectedFarm.width} x{" "}
            {selectedFarm.height}
          </p>

          <p>
            Total Chickens:{" "}
            {selectedFarm.chickens.length}
          </p>

          <BarnView
            barn={selectedFarm}
            onSelectChicken={
              setSelectedChicken
            }
          />
        </div>

        {/* RIGHT PANEL */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "15px",
              boxShadow:
                "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <EnvironmentPanel
              farm={selectedFarm}
            />
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "15px",
              boxShadow:
                "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <ChickenDetails
              chicken={selectedChicken}
            />
          </div>
        </div>
      </div>
    </div>
  );
}