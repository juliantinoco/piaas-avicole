import { Farm } from "./types";
import { generateChickens } from "./generateChickens";

export const farm2: Farm = {
  id: 2,
  name: "CRA 0131-1",
  width: 830,
  height: 360,
  averageTemperature: 21,
  chickens: generateChickens(500),
};