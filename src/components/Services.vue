<template>
  <section class="services">
    <div class="container">
      <h2>Our Services</h2>
      <div class="service-chunk" v-for="(chunk, index) in chunkedServices" :key="index">
        <ul>
          <li
            v-for="(service, serviceIndex) in chunk"
            :key="serviceIndex"
            :style="{ animationDelay: `${randomDelay(index * 4 + serviceIndex)}s` }"
          >
            <span class="bullet">&bull;</span> {{ service }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      services: [
        'Residential Drywall Installation',
        'Commercial Drywall Installation',
        'Drywall Repair and Patching',
        'Drywall Finishing',
        'Multiple Texture Applications',
        'Steel Stud Framing',
        'Remodel Work',
        'Water Damage Solutions',
        'Fireproofing and Insulation Services',
        'Custom Drywall Solutions',
        'Consultation and Project Management',
        'Emergency Drywall Services',
        'Drywall Demolition and Removal'
      ]
    }
  },
  computed: {
    chunkedServices() {
      const chunkSize = 4
      const chunks = []
      for (let i = 0; i < this.services.length; i += chunkSize) {
        chunks.push(this.services.slice(i, i + chunkSize))
      }
      return chunks
    }
  },
  methods: {
    randomDelay(index) {
      // Generate a random delay between 0.1s and 0.5s
      return (Math.random() * 0.4 + 0.1).toFixed(2) * index
    }
  }
}
</script>

<style scoped>
.services {
  background-color: #f8f8f8;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.services h2 {
  text-align: center;
  font-size: 2rem;
  color: #a70404;
  margin-bottom: 2rem;
}

.service-chunk {
  display: flex;
  justify-content: center;
  align-items: center;
}

.services ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

.services li {
  font-size: 1.1rem;
  color: #490303;
  padding: 0.5rem 1rem;
  opacity: 0;
  animation: slideIn 0.5s ease forwards;
  display: inline-block;
  margin: 0 0.5rem;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.services li .bullet {
  margin-right: 8px;
}
</style>
