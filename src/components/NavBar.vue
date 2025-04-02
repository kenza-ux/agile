<template>
  <nav class="navbar">
    <router-link to="/" class="logo">NEOartis</router-link>

    <div class="nav-links">
      <router-link to="/artisans">Liste des artisans</router-link>

      <template v-if="!isAuthenticated">
        <button @click="openAuthModal('login')" class="auth-btn">
          Connexion
        </button>
      </template>

      <template v-else>
        <router-link
            :to="userRole === 'artisan' ? '/artisan/dashboard' : '/client/dashboard'"
            class="profile-link"
        >
          {{ currentUser.name }}
        </router-link>
        <button @click="logout" class="auth-btn">
          Déconnexion
        </button>
      </template>
    </div>

    <!-- Modal d'authentification -->
    <AuthModal
        v-if="showAuthModal"
        :mode="authModalMode"
        @close="showAuthModal = false"
        @success="handleAuthSuccess"
    />
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AuthModal from '@/components/AuthModal.vue'

export default {
  components: { AuthModal },
  data() {
    return {
      showAuthModal: false,
      authModalMode: 'login' // 'login' ou 'register'
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'userRole', 'currentUser'])
  },
  methods: {
    ...mapActions(['logout']),
    openAuthModal(mode) {
      this.authModalMode = mode
      this.showAuthModal = true
    },
    handleAuthSuccess() {
      this.showAuthModal = false
      this.$router.push(
          this.userRole === 'artisan'
              ? '/artisan/dashboard'
              : '/client/dashboard'
      )
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
