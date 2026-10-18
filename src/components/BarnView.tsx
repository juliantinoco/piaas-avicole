import Chicken from "./Chicken";
import { Barn, Chicken as ChickenType } from "../data/mockData";

interface Props {
  barn: Barn;
  onSelectChicken: (c: ChickenType) => void;
}

export default function BarnView({
  barn,
  onSelectChicken,
}: Props) {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "100%",
        background: "#f9f9f9",
      }}
    >
      <svg
        viewBox={`0 0 ${barn.width} ${barn.height}`}
        width="100%"
        height="600"
      >
        <rect
          x="0"
          y="0"
          width={barn.width}
          height={barn.height}
          fill="#f4f4f4"
        />

        {barn.chickens.map((c) => (
          <Chicken
            key={c.id}
            chicken={c}
            onClick={onSelectChicken}
          />
        ))}
      </svg>
    </div>
  );
}