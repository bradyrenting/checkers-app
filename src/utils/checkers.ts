import { Piece, Player, Position, x } from "@/types";

export const addPieces = (
  pieces: Piece[],
  columns: x[],
  startRow: number,
  endRow: number,
  color: Player
) => {
  for (let row = startRow; row <= endRow; row++) {
    for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
      if ((row + columnIndex) % 2 !== 0) {
        pieces.push({
          color,
          position: `${columns[columnIndex]}${row}` as Position,
          type: "man",
        });
      }
    }
  }
};
