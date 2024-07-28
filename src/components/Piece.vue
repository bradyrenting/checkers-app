<script setup lang="ts">
import { Piece } from "@/types";
import { cn } from "@/utils/layout";
import { computed } from "vue";

const props = defineProps<{
  piece: Piece;
  selected: boolean;
}>();

const color = computed(() => {
  return props.piece.color === "brown" ? "bg-yellow-900" : "bg-red-500";
});
</script>

<template>
  <div
    :class="
      cn(
        selected ? 'border border-white' : 'border-none',
        color,
        'size-8  rounded-2xl'
      )
    "
  ></div>
</template>
