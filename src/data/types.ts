export interface FeedingRecord {
  date: string;
  amount: number;
}

export interface Chicken {
  id: number;
  x: number;
  y: number;

  temperature: number;
  weight: number;
  age: number;

  feedingHistory: FeedingRecord[];
}

export interface Farm {
  id: number;

  name: string;

  width: number;
  height: number;

  chickens: Chicken[];

  averageTemperature: number;
}