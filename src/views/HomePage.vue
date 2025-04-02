<template>
  <div class="home-page">
    <nav-bar />

    <div class="profiles-container">
      <div class="profile-card client-profile">
        <h2>Porteur de Projet</h2>
        <p>Trouvez les artisans qualifiés pour votre projet</p>
        <div class="auth-buttons">
          <router-link to="/client/login" class="btn">Se connecter</router-link>
          <router-link to="/client/register" class="btn outline">S'inscrire</router-link>
        </div>
      </div>

      <div class="profile-card artisan-profile">
        <h2>Artisan</h2>
        <p>Trouvez des projets passionnants</p>
        <div class="auth-buttons">
          <router-link to="/artisan/login" class="btn">Se connecter</router-link>
          <router-link to="/artisan/register" class="btn outline">S'inscrire</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomePage',
  components: { NavBar }
}
</script>

<style scoped>
.home-page {
  padding: 2rem;
}

.profiles-container {
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  justify-content: center;
}

.profile-card {
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.client-profile {
  background-color: #f0f7ff;
}

.artisan-profile {
  background-color: #fff0f0;
}

.auth-buttons {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}

.btn.outline {
  background-color: transparent;
  border: 1px solid #42b983;
  color: #42b983;
}
</style>
