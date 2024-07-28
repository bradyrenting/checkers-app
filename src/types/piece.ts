import { Player, Position } from "@/types";

export interface Piece {
  color: Player;
  position: Position;
  type: "man" | "king";
}
