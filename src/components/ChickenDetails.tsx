import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { Chicken } from "../data/mockData";

interface Props {
  chicken: Chicken | null;
}

export default function ChickenDetails({
  chicken,
}: Props) {
  if (!chicken) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Select a Chicken</h2>
        <p>Click on a chicken in the barn to view its details.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <h2>Chicken #{chicken.id}</h2>

      <img
        src="https://placehold.co/500x300"
        alt="Chicken"
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />

      <p>
        Temperature:
        <strong>
          {" "}
          {chicken.temperature.toFixed(1)} °C
        </strong>
      </p>

      <p>
        Weight:
        <strong>
          {" "}
          {chicken.weight.toFixed(2)} kg
        </strong>
      </p>

      <p>
        Age:
        <strong>
          {" "}
          {chicken.age} days
        </strong>
      </p>

      <h3>Feed Intake History</h3>

      <ResponsiveContainer
        width="100%"
        height={250}
      >
        <LineChart
          data={chicken.feedingHistory}
        >
          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#2e7d32"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}