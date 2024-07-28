<script setup lang="ts">
import { useGameStore } from "@/stores/game";

const game = useGameStore();
</script>

<template>
  <div class="flex gap-4">
    <button class="btn" @click="game.start">Start</button>

    <button class="btn" @click="game.clear">Stop</button>
  </div>
</template>
