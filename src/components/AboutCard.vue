<template>
  <div class="about-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.about-card {
  padding: 1.5rem;
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}
.about-card h3 {
  font-size: 1.5rem;
  color: #490303;
  margin-bottom: 1rem;
}
.about-card p {
  font-size: 1.1rem;
  color: #490303;
}
</style>
