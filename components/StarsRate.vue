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
  height: 100%;
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

@media (max-width: 640px) {
  .stars {
    width: 80px;
  }
  .stars-empty {
    width: 80px;
  }
  .stars-filled {
    width: 80px;
  }
}

@media (max-width: 480px) {
  .stars {
    width: 65px;
  }
  .stars-empty {
    width: 65px;
  }
  .stars-filled {
    width: 65px;
  }
}
</style>
