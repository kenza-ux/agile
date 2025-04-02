<template>
  <div class="login-page">
    <nav-bar />

    <div class="login-form">
      <h2>Connexion Porteur de Projet</h2>

      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" required>
        </div>

        <div class="form-group">
          <label>Mot de passe</label>
          <input type="password" v-model="password" required>
        </div>

        <button type="submit" class="submit-btn">Se connecter</button>
      </form>

      <p class="register-link">
        Pas encore inscrit ? <router-link to="/client/register">Créer un compte</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'ClientLogin',
  components: { NavBar },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Ici, vous devriez faire un appel API pour authentifier l'utilisateur
      // Exemple simplifié :
      localStorage.setItem('authToken', 'simulated-token')
      localStorage.setItem('userRole', 'client')
      this.$router.push('/client/dashboard')
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.login-form {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

.register-link {
  margin-top: 1rem;
  text-align: center;
}
</style>
