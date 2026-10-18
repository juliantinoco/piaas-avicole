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

export interface Barn {
  id: number;
  name: string;
  width: number;
  height: number;

  chickens: Chicken[];
}

const generateHistory = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    date: `Day ${i + 1}`,
    amount: 90 + Math.random() * 30,
  }));
};

export const barnData: Barn = {
  id: 1,
  name: "Poulailler A",
  width: 100,
  height: 60,

  chickens: Array.from({ length: 80 }, (_, i) => ({
    id: i + 1,

    x: Math.random() * 90,
    y: Math.random() * 50,

    temperature: 40 + Math.random() * 2,

    weight: 1 + Math.random() * 2,

    age: 20 + Math.floor(Math.random() * 40),

    feedingHistory: generateHistory(),
  })),
};