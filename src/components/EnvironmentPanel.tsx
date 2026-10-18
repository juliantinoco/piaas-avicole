interface Props {
  timestamp: string;
  temperature: number;
  humidity: number;
  luminosity: number;
  isReal: boolean;
}

export default function EnvironmentPanel({
  timestamp,
  temperature,
  humidity,
  luminosity,
  isReal,
}: Props) {
  const date =
    new Date(timestamp);

  return (
    <div
      style={{
        minWidth: "250px",
      }}
    >
      <h3>Environment</h3>

      <p>
        <strong>Date:</strong>{" "}
        {date.toLocaleDateString()}
      </p>

      <p>
        <strong>Time:</strong>{" "}
        {date.toLocaleTimeString()}
      </p>

      <p>
        <strong>Temperature:</strong>{" "}
        {temperature.toFixed(2)}°C
      </p>

      <p>
        <strong>Humidity:</strong>{" "}
        {humidity.toFixed(2)}%
      </p>

      <p>
        <strong>Luminosity:</strong>{" "}
        {luminosity}
      </p>

      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          borderRadius: "8px",
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          backgroundColor: isReal
            ? "#00B894"
            : "#6C5CE7",
        }}
      >
        {isReal
          ? "REAL SENSOR"
          : "VIRTUAL PREDICTION"}
      </div>
    </div>
  );
}