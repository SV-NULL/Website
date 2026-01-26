import { committees } from "@/config/committee";

export const getCommittees = () => {
  return committees;
};

export const getCommitteeById = (id: string) => {
  return committees.find((committee) => committee.id === id);
};
