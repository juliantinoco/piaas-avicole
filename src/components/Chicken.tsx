import { Chicken as ChickenType } from "../data/mockData";

interface Props {
  chicken: ChickenType;
  onClick: (c: ChickenType) => void;
}

export default function Chicken({
  chicken,
  onClick,
}: Props) {
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
        fill="#ffffff"
        stroke="#000"
      />

      <circle
        cx="1.5"
        cy="-1"
        r="0.7"
        fill="#fff"
        stroke="#000"
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