<script setup lang="ts">
import PieceComponent from "@/components/Piece.vue";
import { cn } from "@/utils/layout";

import { useGameStore } from "@/stores/game.ts";

import { Position, x, y } from "@/types";
import { storeToRefs } from "pinia";

const game = useGameStore();
const { rows, columns, selectedPosition } = storeToRefs(game);

const isWhiteSquare = (row: y, col: x): boolean => {
  return (
    (row % 2 === 0 && ["A", "C", "E", "G"].includes(col)) ||
    (row % 2 !== 0 && ["B", "D", "F", "H"].includes(col))
  );
};

const getSquareColor = (position: Position): string => {
  if (isWhiteSquare(Number(position[1]) as y, position[0] as x)) {
    return "bg-white";
  }

  return "bg-black";
};
</script>

<template>
  <div class="grid grid-cols-8 grid-rows-8 h-96 w-96 border-2 border-black">
    <div v-for="row in rows" :key="row" class="contents">
      <div
        v-for="column in columns"
        :key="column"
        :class="
          cn(
            getSquareColor(`${column}${row}`),
            'flex items-center justify-center'
          )
        "
        @click="game.selectSquare(`${column}${row}`)"
      >
        <PieceComponent
          v-if="game.getPiece(`${column}${row}`)"
          :piece="game.getPiece(`${column}${row}`)!"
          :selected="selectedPosition === `${column}${row}`"
        />
      </div>
    </div>
  </div>
</template>
