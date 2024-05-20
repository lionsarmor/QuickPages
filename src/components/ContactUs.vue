<template>
  <footer class="contact-footer">
    <div class="container">
      <div class="contact-info">
        <h2>Contact Us</h2>
        <p>
          <strong>Cellphone:</strong> <a href="tel:3073897454" class="contact-link">307-389-7454</a>
        </p>
        <p>
          <strong>Landline:</strong> <a href="tel:3073823321" class="contact-link">307-382-3321</a>
        </p>
        <p><strong>Address:</strong> PO 1381, Rock Springs, Wyoming, 82902</p>
      </div>
      <div class="social-media">
        <p>Follow us:</p>
        <div class="social-icons">
          <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style scoped>
.contact-footer {
  background-color: #f3e9ce;
  padding: 3rem 1rem;
  border-top: 1px solid #a70404;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: flex-end; /* Align content to the right */
  flex-wrap: wrap; /* Allow wrapping of content */
}

.contact-info {
  flex: 1; /* Take remaining space */
  max-width: 50%; /* Adjust width as needed */
  text-align: left; /* Align text to the left */
}

.contact-footer h2 {
  font-size: 2rem;
  color: #a70404;
  margin-bottom: 1.5rem;
}

.contact-info p {
  font-size: 1.1rem;
  color: #490303;
  margin: 0.5rem 0;
}

.contact-info a {
  color: #007bff;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.social-media {
  flex: 1; /* Take remaining space */
  max-width: 50%; /* Adjust width as needed */
  text-align: right; /* Align text to the right */
}

.social-icons {
  display: flex;
  justify-content: flex-end; /* Align icons to the right */
}

.social-icon {
  font-size: 1.5rem;
  color: #490303;
  margin: 0 0.5rem;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-3px);
}
</style>
