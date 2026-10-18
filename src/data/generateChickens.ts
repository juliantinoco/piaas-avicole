import { Chicken } from "./types";

function generateHistory() {
  return Array.from({ length: 10 }, (_, i) => ({
    date: `Day ${i + 1}`,
    amount: 90 + Math.random() * 30,
  }));
}

export function generateChickens(
  count: number
): Chicken[] {
  return Array.from(
    { length: count },
    (_, i) => ({
      id: i + 1,

      x: Math.random() * 90,
      y: Math.random() * 50,

      temperature:
        40 + Math.random() * 2,

      weight:
        1 + Math.random() * 2,

      age:
        20 +
        Math.floor(
          Math.random() * 40
        ),

      feedingHistory:
        generateHistory(),
    })
  );
}