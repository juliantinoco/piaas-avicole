import Chicken from "./Chicken";

import {
  Farm,
  Chicken as ChickenType,
} from "../data/types";

interface Props {
  barn: Farm;

  luminosity: number;

  onSelectChicken: (
    c: ChickenType
  ) => void;
}

export default function BarnView({
  barn,
  luminosity,
  onSelectChicken,
}: Props) {
  let backgroundColor = "#FFF8DC";

  if (luminosity < 20) {
    backgroundColor = "#101820";
  } else if (luminosity < 60) {
    backgroundColor = "#909090";
  }

  return (
    <div
      style={{
        border: "2px solid black",
        width: "100%",
        background: backgroundColor,
        transition:
          "background-color 0.8s ease",
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
          fill={backgroundColor}
        />

        {barn.chickens.map((c) => (
          <Chicken
            key={c.id}
            chicken={c}
            luminosity={luminosity}
            onClick={onSelectChicken}
          />
        ))}
      </svg>
    </div>
  );
}