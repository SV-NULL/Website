import { Image } from "./image";
import { Person } from "./person";
import { Role } from "./roles";

export type Member = {
  person: Person;
  role: Role;
  date: string;
};

export interface ListItem {
  id: string;
  image: Image;
  title: string;
  subtitle: string;
}
