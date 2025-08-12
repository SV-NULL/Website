import { ListItem, Member } from "./common";

export interface Commissie extends ListItem {
  members: Member[];
  content: string;
}
