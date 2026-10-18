import { Farm } from "./types";
import { generateChickens } from "./generateChickens";

export const farm3: Farm = {
  id: 3,
  name: "CRA 0133-1",
  width: 830,
  height: 360,
  averageTemperature: 24,
  chickens: generateChickens(1000),
};