import { boards } from "@/config/board";

/**
 * Get all boards in reverse order.
 *
 * @returns An array of Bestuur objects.
 */
export const getBoards = () => {
  return [...boards].reverse();
};

/**
 * Get a board by its ID.
 *
 * @param id - The ID of the board to retrieve.
 * @returns The Bestuur object with the matching ID, or undefined if not found.
 */
export const getBoardById = (id: string) => {
  return boards.find((board) => board.id === id);
};
