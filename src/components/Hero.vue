<template>
  <section class="hero">
    <div class="overlay">
      <div class="container">
        <h1>25 Years in Service</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroPage'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

.hero {
  position: relative;
  background-image: url('@/assets/popcorn.jpg'); /* Replace '/path/to/your/image.jpg' with the actual path to your image */
  background-size: cover;
  background-position: center;
  padding: 13rem 0;
  text-align: center;
  border-bottom: 1px solid #a70404;
  font-family: 'Satisfy', cursive; /* Use Satisfy font from Google Fonts */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay color with 50% opacity */
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 3rem;
  color: #ffffff; /* White text color */
  margin: 0;
}
</style>
