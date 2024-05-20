<template>
  <section class="about-us">
    <div class="container">
      <h2>About Us</h2>
      <div class="slideshow">
        <div
          v-for="(blurb, index) in blurbs"
          :key="index"
          :class="{ slide: true, active: index === currentSlide }"
        >
          <AboutCard :title="blurb.title" :description="blurb.description" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AboutCard from './AboutCard.vue'

export default {
  name: 'AboutUs',
  components: {
    AboutCard
  },
  data() {
    return {
      blurbs: [
        {
          title: 'Will Travel',
          description: 'We go the extra mile to reach our clients and provide exceptional service.'
        },
        {
          title: 'Insured',
          description:
            'Your peace of mind is our priority, and we are fully insured for your protection.'
        },
        {
          title: 'Been in Business Since 1995',
          description:
            'With decades of experience, we deliver high-quality craftsmanship and reliability.'
        },
        {
          title: 'American Owned',
          description: 'Proudly serving our community as a locally owned and operated business.'
        }
      ],
      currentSlide: 0
    }
  },
  mounted() {
    setInterval(this.nextSlide, 5000)
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.blurbs.length
    }
  }
}
</script>

<style scoped>
.about-us {
  background-color: #f8f8f8;
  padding: 3rem 1rem;
  text-align: center;
  border-top: 1px solid #a70404;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.about-us h2 {
  font-size: 2rem;
  color: #a70404;
  margin-bottom: 2rem;
}
.slideshow {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
}
.slide {
  display: none;
  transition: opacity 0.5s ease-in-out;
}
.slide.active {
  display: block;
}
</style>
