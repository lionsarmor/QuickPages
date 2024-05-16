<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div>
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
