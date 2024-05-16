Copy code
<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

// Define props using defineProps within the setup function
const props = defineProps<{
  msg: string
}>()
</script>

<script lang="ts">
// Export the component with its name
export default {
  name: 'HomePage'
  // Add any component-specific logic here
}
</script>

<template>
  <div class="bg-gray-100">
    <!-- Navbar -->
    <div class="bg-blue-500 p-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <img class="h-8" src="/src/assets/logo.svg" alt="Logo" />
      </div>
      <!-- Brand Name -->
      <div class="text-white text-lg font-semibold">Your Brand Name</div>
      <!-- Phone Number -->
      <div class="text-white text-lg font-semibold">Phone: +1234567890</div>
    </div>

    <!-- Content -->
    <div class="container mx-auto mt-8 px-4">
      <!-- Your content here -->
      <p><RouterLink to="/">Home</RouterLink></p>
    </div>

    <!-- Simple Tailwind Name Number -->
    <div class="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg">
      <span class="text-lg font-semibold">42</span>
    </div>
  </div>
</template>

<style scoped></style>
