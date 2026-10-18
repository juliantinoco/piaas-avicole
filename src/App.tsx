import { useState, useEffect } from "react";

import BarnView from "./components/BarnView";
import ChickenDetails from "./components/ChickenDetails";
import FarmCard from "./components/FarmCard";
import SimulationControls from "./components/SimulationControls";
import EnvironmentPanel from "./components/EnvironmentPanel";

import { Chicken } from "./data/types";

import { farm1 } from "./data/farm1";
import { farm2 } from "./data/farm2";
import { farm3 } from "./data/farm3";

import { getEnvironmentData } from "./services/environmentService";

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

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [selectedDate, setSelectedDate] =
    useState("2026-09-01");

  const [selectedTime, setSelectedTime] =
    useState("00:00");

  const [simulationSpeed, setSimulationSpeed] =
    useState(24);

  const [environmentData] =
    useState(
      getEnvironmentData()
    );

  const currentEnvironment =
    environmentData[currentIndex];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((previous) => {
        const next =
          previous + simulationSpeed;

        if (
          next >=
          environmentData.length
        ) {
          return 0;
        }

        return next;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [
    isPlaying,
    simulationSpeed,
    environmentData.length,
  ]);

  const handlePlay = () => {
    const targetDateTime =
      `${selectedDate}T${selectedTime}:00`;

    const foundIndex =
      environmentData.findIndex(
        (record) =>
          record.timestamp >=
          targetDateTime
      );

    if (foundIndex >= 0) {
      setCurrentIndex(foundIndex);
    }

    setIsPlaying(true);
  };

  if (!currentEnvironment) {
    return (
      <div>
        Loading environment...
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <h1>Poultry Digital Twin</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {farms.map((farm) => (
          <FarmCard
            key={farm.id}
            farm={farm}
            selected={
              selectedFarm.id === farm.id
            }
            onClick={() => {
              setSelectedFarm(farm);
              setSelectedChicken(null);
            }}
          />
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 320px",
              gap: "30px",
              marginBottom: "20px",
            }}
          >
            <div>
              <h2>
                {selectedFarm.name}
              </h2>

              <p>
                Dimensions:{" "}
                {selectedFarm.width}
                {" x "}
                {selectedFarm.height}
              </p>

              <p>
                Total Chickens:{" "}
                {
                  selectedFarm.chickens
                    .length
                }
              </p>

              <div
                style={{
                  marginTop: "25px",
                }}
              >
                <SimulationControls
                  onPlay={handlePlay}
                  onPause={() =>
                    setIsPlaying(false)
                  }
                  selectedDate={
                    selectedDate
                  }
                  selectedTime={
                    selectedTime
                  }
                  selectedSpeed={
                    simulationSpeed
                  }
                  onDateChange={
                    setSelectedDate
                  }
                  onTimeChange={
                    setSelectedTime
                  }
                  onSpeedChange={
                    setSimulationSpeed
                  }
                />
              </div>
            </div>

            <EnvironmentPanel
              timestamp={
                currentEnvironment.timestamp
              }
              temperature={
                currentEnvironment.temperature
              }
              humidity={
                currentEnvironment.humidity
              }
              luminosity={
                currentEnvironment.luminosity
              }
              isReal={
                currentEnvironment.isReal
              }
            />
          </div>

          <BarnView
            barn={selectedFarm}
            luminosity={
              currentEnvironment.luminosity
            }
            onSelectChicken={
              setSelectedChicken
            }
          />
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <ChickenDetails
            chicken={selectedChicken}
          />
        </div>
      </div>
    </div>
  );
}
