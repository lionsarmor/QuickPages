<template>
  <nav class="navbar">
    <div class="container">
      <a href="#" class="logo">
        <img src="@/assets/logo.png" alt="Company Logo" class="logo-img" />
        Finer Finish Drywall
      </a>
      <ul class="nav-links">
        <li><a href="#">Cellphone: 307-389-7454</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #a70404;
  padding: 1rem 0;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.logo {
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: normal;
  font-family: 'Satisfy', cursive; /* Use Satisfy font from Google Fonts */
  color: #a70404;
  text-decoration: none;
  position: relative;
}
.logo-img {
  width: 80px;
  height: 80px;
  margin-right: 0.5rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}
.nav-links a {
  text-decoration: none;
  color: #a70404;
  font-size: 1rem;
}
.nav-links a:hover {
  color: #490303;
}
</style>
