<template>
  <div id="app">
    <NavBar />
    <Hero />
    <Services />
    <PicturesPage />
    <AboutUs />
    <ContactUs />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import PicturesPage from './components/PicturesPage.vue'
import AboutUs from './components/AboutUs.vue'
import ContactUs from './components/ContactUs.vue'

export default {
  name: 'AppPage',
  components: {
    NavBar,
    Hero,
    Services,
    PicturesPage,
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
