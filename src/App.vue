<script setup lang="ts">
import GameBoard from "@/components/GameBoard.vue";
import GameControls from "@/components/GameControls.vue";

import { useGameStore } from "@/stores/game.ts";
import { storeToRefs } from "pinia";

const game = useGameStore();
const { startedAt, playerTurn } = storeToRefs(game);

import { computed } from "vue";

const title = computed(() => {
  if (startedAt.value === null) {
    return "Checkers";
  }

  return `${playerTurn.value}'s Turn`;
});
</script>

<template>
  <div class="window">
    <div class="title-bar">
      <h1 class="title uppercase">{{ title }}</h1>
    </div>
  </div>
  <div class="grid place-items-center">
    <div class="space-y-4">
      <GameControls />

      <GameBoard />
    </div>
  </div>
</template>
