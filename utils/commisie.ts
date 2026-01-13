import { commissies } from "@/content/commissies";

export const getCommissies = () => {
  return commissies;
};

export const getCommissieById = (id: string) => {
  return commissies.find((commissie) => commissie.id === id);
};
