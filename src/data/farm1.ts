import { Farm } from "./types";

import {
  generateChickens
} from "./generateChickens";

import {
  generateEnvironment
} from "./generateEnvironment";

export const farm1: Farm = {

  id: 1,
  name: "CRA 0125-1",
  width: 830,
  height: 360,
  averageTemperature: 22,
  currentTemperature: 22,
  currentHumidity: 47,
  currentLuminosity: 50,
  currentIsReal: true,
  environment:
    generateEnvironment(),
  chickens:
    generateChickens(200),
};