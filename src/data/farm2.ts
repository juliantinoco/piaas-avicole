import { Farm } from "./types";
import { generateChickens } from "./generateChickens";

export const farm2: Farm = {
  id: 2,

  name: "CRA 0158-2",

  width: 950,
  height: 420,

  averageTemperature: 21,

  currentTemperature: 21,

  currentHumidity: 48,

  currentLuminosity: 55,

  currentIsReal: true,

  environment: [],

  chickens:
    generateChickens(450),
};