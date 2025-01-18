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
  width: 20%;
  height: auto;
  font-size: 0.95rem;
}

.stars-empty {
  width: 120px;
  position: absolute;
  inset: 0;
}

.stars-filled {
  width: 120px;
  position: absolute;
  inset: 0;
}
</style>
