<template>
  <div class="auth-modal">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">×</button>

      <h2>{{ mode === 'login' ? 'Connexion' : 'Inscription' }}</h2>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="form.email" required>
        </div>

        <div class="form-group">
          <label>Mot de passe</label>
          <input type="password" v-model="form.password" required>
        </div>

        <!-- Sélection du rôle uniquement lors de l'inscription -->
        <div v-if="mode === 'register'" class="form-group">
          <label>Je suis :</label>
          <select v-model="form.role" required>
            <option value="client">Porteur de projet</option>
            <option value="artisan">Artisan</option>
          </select>
        </div>

        <button type="submit" class="submit-btn">
          {{ mode === 'login' ? 'Se connecter' : 'S\'inscrire' }}
        </button>
      </form>

      <p class="toggle-mode" @click="toggleMode">
        {{ mode === 'login'
          ? 'Pas encore de compte ? S\'inscrire'
          : 'Déjà un compte ? Se connecter'
        }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    mode: {
      type: String,
      default: 'login',
      validator: value => ['login', 'register'].includes(value)
    }
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        role: 'client' // Valeur par défaut
      }
    }
  },
  methods: {
    ...mapActions(['login', 'register']),
    toggleMode() {
      this.$emit('modeChange',
          this.mode === 'login' ? 'register' : 'login'
      )
    },
    async handleSubmit() {
      try {
        if (this.mode === 'login') {
          await this.login(this.form)
        } else {
          await this.register({
            ...this.form,
            name: this.form.email.split('@')[0] // Nom généré
          })
        }
        this.$emit('success')
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<style scoped>
.auth-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
}

.toggle-mode {
  margin-top: 1rem;
  color: #42b983;
  cursor: pointer;
  text-decoration: underline;
}
</style>
