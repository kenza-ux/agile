<template>
  <nav class="navbar">
    <router-link to="/" class="logo">NEOartis</router-link>

    <div class="nav-links">
      <router-link to="/artisansListe" class="nav-link">Liste des artisans</router-link>
      <button
          v-if="!isAuthenticated"
          @click="goToLogin"
          class="auth-btn"
      >
        Connexion
      </button>
      <button
          v-else
          @click="logout"
          class="auth-btn"
      >
        Déconnexion
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    isAuthenticated() {
      return localStorage.getItem('authToken')
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/client/login')
    },
    logout() {
      localStorage.removeItem('authToken')
      localStorage.removeItem('userRole')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #2c3e50;
}

.auth-btn {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
