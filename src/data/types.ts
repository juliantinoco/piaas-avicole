export interface FeedingRecord {
  date: string;
  amount: number;
}

export interface Chicken {

  id: number;

  x: number;
  y: number;

  targetX: number;
  targetY: number;

  temperature: number;

  weight: number;

  age: number;

  feedingHistory:
    FeedingRecord[];
}


export interface EnvironmentRecord {
  timestamp: string;
  temperature: number;
  humidity: number;
  luminosity: number;
  isReal: boolean;
}

export interface Farm {
  id: number;
  name: string;
  width: number;
  height: number;
  averageTemperature: number;
  currentTemperature: number;
  currentHumidity: number;
  currentLuminosity: number;
  currentIsReal: boolean;
  environment: EnvironmentRecord[];
  chickens: Chicken[];
}