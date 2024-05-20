<template>
  <div class="image-carousel">
    <div class="carousel-track">
      <div class="carousel-item">
        <img src="@/assets/beer.png" alt="Image 1" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/beer.png" alt="Image 2" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/beer.png" alt="Image 3" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/beer.png" alt="Image 1" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/beer.png" alt="Image 2" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/beer.png" alt="Image 3" />
      </div>
      <!-- Add more carousel items as needed -->
    </div>
  </div>
</template>

<style scoped>
.image-carousel {
  width: 100%;
  overflow-x: auto; /* Enable horizontal scrolling */
  scroll-snap-type: x mandatory; /* Snap items to the viewport */
  -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS */
}

.carousel-track {
  display: flex;
  scroll-snap-type: x mandatory; /* Snap items to the viewport */
}

.carousel-item {
  flex: 0 0 auto; /* Let items expand to their content width */
  scroll-snap-align: start; /* Ensure items align to the start of the viewport */
}

.carousel-item img {
  width: 400px; /* Adjust the width of the images as needed */
  height: auto;
  margin-right: 5px; /* Add some margin between images */
  cursor: pointer; /* Change cursor to indicate clickable element */
  transition: transform 0.3s ease; /* Add transition for smoother resizing */
}

.carousel-item img:hover {
  transform: scale(1.1); /* Increase size on hover */
}

/* Hide the scrollbar */
.image-carousel::-webkit-scrollbar {
  display: none;
}
</style>
