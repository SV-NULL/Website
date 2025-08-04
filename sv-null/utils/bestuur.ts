import { bestuur } from "@/content/bestuur";

export const getBestuur = () => {
  return bestuur.reverse();
};

export const getBestuurById = (id: string) => {
  return bestuur.find((bestuur) => bestuur.id === id);
};
