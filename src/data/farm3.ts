import { Farm } from "./types";
import { generateChickens } from "./generateChickens";

export const farm3: Farm = {
  id: 3,

  name: "CRA 0210-3",

  width: 1200,
  height: 480,

  averageTemperature: 23,

  currentTemperature: 23,

  currentHumidity: 46,

  currentLuminosity: 60,

  currentIsReal: false,

  environment: [],

  chickens:
    generateChickens(700,
    1200,
    480),
};