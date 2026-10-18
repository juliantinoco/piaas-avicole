import { Chicken as ChickenType } from "../data/types";

interface Props {
  chicken: ChickenType;

  luminosity: number;

  onClick: (c: ChickenType) => void;
}

export default function Chicken({
  chicken,
  luminosity,
  onClick,
}: Props) {
  const chickenBodyColor =
    luminosity < 20
      ? "#FFFFFF"
      : luminosity < 60
      ? "#F0F0F0"
      : "#EAEAEA";

  const strokeColor =
    luminosity < 20
      ? "#D0D0D0"
      : "#000000";

  return (
    <g
      transform={`translate(${chicken.x} ${chicken.y})`}
      onClick={() => onClick(chicken)}
      style={{ cursor: "pointer" }}
    >
      <ellipse
        cx="0"
        cy="0"
        rx="2"
        ry="1.5"
        fill={chickenBodyColor}
        stroke={strokeColor}
      />

      <circle
        cx="1.5"
        cy="-1"
        r="0.7"
        fill={chickenBodyColor}
        stroke={strokeColor}
      />

      <circle
        cx="2"
        cy="-1"
        r="0.1"
        fill="black"
      />
    </g>
  );
}