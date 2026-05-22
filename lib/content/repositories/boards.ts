import { boards } from "@/config/board";
import { Board } from "@/types/bestuur";

/**
 * Get all boards in reverse order.
 *
 * @returns An array of Board objects.
 */
export const getBoards = (): Board[] => {
  return [...boards].reverse();
};

/**
 * Get a board by its ID.
 *
 * @param id - The ID of the board to retrieve.
 * @returns The Board object with the matching ID, or undefined if not found.
 */
export const getBoardById = (id: string): Board | undefined => {
  return boards.find((board) => board.id === id);
};
