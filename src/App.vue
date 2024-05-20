<template>
  <div id="app">
    <NavBar />
    <Hero />
    <Services />
    <AboutUs />
    <ContactUs />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import AboutUs from './components/AboutUs.vue'
import ContactUs from './components/ContactUs.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Hero,
    Services,
    AboutUs,
    ContactUs
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
