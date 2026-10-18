import { Farm } from "../data/types";

interface Props {
  farm: Farm;
}

export default function EnvironmentPanel({
  farm,
}: Props) {
  return (
    <div>
      <h3>Environment</h3>

      <p>
        Temperature: {farm.currentTemperature}°C
      </p>

      <p>
        Humidity: {farm.currentHumidity}%
      </p>

      <p>
        Luminosity: {farm.currentLuminosity}
      </p>

      <div
        style={{
          backgroundColor: farm.currentIsReal
            ? "#00B894"
            : "#6C5CE7",
          color: "white",
          padding: "10px",
          borderRadius: "8px",
          marginTop: "10px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {farm.currentIsReal
          ? "REAL SENSOR"
          : "VIRTUAL PREDICTION"}
      </div>
    </div>
  );
}