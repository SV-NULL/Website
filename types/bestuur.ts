import { ListItem, Member } from "./common";

export interface Bestuur extends ListItem {
  members: Member[];
  content: string;
}
