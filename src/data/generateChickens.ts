import { Chicken } from "./types";

function generateHistory() {
  return Array.from(
    { length: 10 },
    (_, i) => ({
      date: `Day ${i + 1}`,
      amount: 90 + Math.random() * 30,
    })
  );
}

export function generateChickens(
  count: number,
  barnWidth: number,
  barnHeight: number
): Chicken[] {
  return Array.from(
    { length: count },
    (_, i) => ({
      id: i + 1,

      x:
        20 +
        Math.random() *
          (barnWidth - 40),

      y:
        20 +
        Math.random() *
          (barnHeight - 40),

      temperature:
        40 +
        Math.random() * 2,

      weight:
        1 +
        Math.random() * 2,

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