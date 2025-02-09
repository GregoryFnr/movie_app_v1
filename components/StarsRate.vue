<template>
  <div class="stars">
    <img src="/public/stars.webp" class="stars-empty" aria-hidden="true" />
    <img
      src="/public/stars-filled.webp"
      class="stars-filled"
      aria-hidden="true"
      :style="style"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value?: number;
  }>(),
  {
    value: 0,
  }
);

const style = computed(() => ({
  "clip-path": `inset(0 ${(10 - props.value) * 10}% 0 0)`,
}));
</script>

<style scoped>
.stars {
  width: 100px;
}

.stars img {
  filter: invert(100%);
}

.stars-empty {
  width: 100px;
  position: absolute;
  inset: 0;
}

.stars-filled {
  width: 100px;
  position: absolute;
  inset: 0;
}
</style>
