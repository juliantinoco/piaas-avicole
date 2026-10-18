import { Farm } from "../data/types";

interface Props {
  farm: Farm;
  selected: boolean;
  onClick: () => void;
}

export default function FarmCard({
  farm,
  selected,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "20px",
        border: selected
          ? "3px solid green"
          : "1px solid gray",
        borderRadius: "10px",
        cursor: "pointer",
        backgroundColor: "white",
      }}
    >
      <h3>{farm.name}</h3>

      <p>Chickens: {farm.chickens.length}</p>

      <p>
        Dimensions: {farm.width} x {farm.height}
      </p>

      <p>
        Avg Temperature: {farm.averageTemperature}°C
      </p>
    </div>
  );
}