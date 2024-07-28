import { Piece, Player, Position, x, y } from "@/types";
import { addPieces } from "@/utils/checkers";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("game", () => {
  const startedAt = ref<Date | null>(null);

  const selectedPosition = ref<Position | null>();

  const rows = ref([1, 2, 3, 4, 5, 6, 7, 8] as y[]);
  const columns = ref(["A", "B", "C", "D", "E", "F", "G", "H"] as x[]);

  const pieces = ref<Piece[]>([]);

  const playerTurn = ref<Player>("red");

  const getPiece = (position: Position): Piece | undefined => {
    return pieces.value.find((piece: Piece) => piece.position === position);
  };

  const selectSquare = (position: Position) => {
    if (startedAt.value === null) {
      return;
    }

    const piece = getPiece(position);
    if (selectedPosition.value === position) {
      selectedPosition.value = null;

      return;
    }

    if (selectedPosition.value) {
      movePiece(selectedPosition.value, position);

      selectedPosition.value = null;

      return;
    }

    if (piece && piece.color === playerTurn.value) {
      selectedPosition.value = position;
    }
  };

  const movePiece = (from: Position, to: Position) => {
    const piece = getPiece(from);
    const targetPiece = getPiece(to);

    if (piece) {
      const fromRow = Number(from[1]);
      const toRow = Number(to[1]);
      const fromCol = from.charCodeAt(0);
      const toCol = to.charCodeAt(0);

      const rowDiff = toRow - fromRow;
      const colDiff = toCol - fromCol;

      if (Math.abs(rowDiff) !== 1 || Math.abs(colDiff) !== 1) {
        if (Math.abs(rowDiff) === 2 && Math.abs(colDiff) === 2) {
          const jumpedRow = fromRow + rowDiff / 2;
          const jumpedCol = fromCol + colDiff / 2;
          const jumpedPos = (String.fromCharCode(jumpedCol) +
            jumpedRow) as Position;
          const jumpedPiece = getPiece(jumpedPos);

          if (
            jumpedPiece &&
            jumpedPiece.color !== piece.color &&
            !targetPiece
          ) {
            pieces.value = pieces.value.filter((p) => p.position !== jumpedPos);

            piece.position = to;
            playerTurn.value = playerTurn.value === "red" ? "brown" : "red";

            return;
          }
        }
        return;
      }

      if (
        (piece.color === "brown" && toRow <= fromRow) ||
        (piece.color === "red" && toRow >= fromRow)
      ) {
        return;
      }

      if (targetPiece) {
        return;
      }

      piece.position = to;
      playerTurn.value = playerTurn.value === "red" ? "brown" : "red";
    }
  };

  const initializePieces = () => {
    addPieces(pieces.value, columns.value, 1, 3, "brown");

    addPieces(pieces.value, columns.value, 6, 8, "red");
  };

  const start = () => {
    startedAt.value = new Date();

    initializePieces();
  };

  const clear = () => {
    pieces.value = [];

    selectedPosition.value = null;

    playerTurn.value = "red";

    startedAt.value = null;
  };

  return {
    startedAt,
    selectedPosition,
    rows,
    columns,
    pieces,
    playerTurn,
    getPiece,
    selectSquare,
    start,
    clear,
  };
});
