import { EnvironmentRecord } from "./types";

export function generateEnvironment(): EnvironmentRecord[] {
  const data: EnvironmentRecord[] = [];

  const start = new Date("2026-09-01T00:00:00");
  const end = new Date("2026-09-30T23:55:00");

  let current = start;

  while (current <= end) {
    const hour = current.getHours();

    let luminosity = 0;

    if (hour >= 6 && hour <= 19) {
      const distance = Math.abs(13 - hour);

      luminosity = Math.max(
        0,
        98 - distance * 12
      );
    }

    const progress =
      (hour * 60 +
        current.getMinutes()) /
      (24 * 60);

    const temperature =
      28 -
      progress * 7 +
      Math.random() * 0.5;

    const humidity =
      46 +
      Math.random() * 3;

    data.push({
      timestamp:
        current.toISOString(),

      temperature: Number(
        temperature.toFixed(2)
      ),

      humidity: Number(
        humidity.toFixed(2)
      ),

      luminosity: Math.round(
        luminosity
      ),

      isReal:
        Math.random() > 0.4,
    });

    current = new Date(
      current.getTime() +
        5 * 60 * 1000
    );
  }

  return data;
}