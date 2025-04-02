// Formulaire d'inscription artisan 

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div class="form-group">
      <label for="name" class="label">Nom complet</label>
      <input
        type="text"
        id="name"
        v-model="formData.name"
        class="input"
        required
      />
    </div>

    <div class="form-group">
      <label for="email" class="label">Adresse e-mail</label>
      <input
        type="email"
        id="email"
        v-model="formData.email"
        class="input"
        required
      />
    </div>

    <div class="form-group">
      <label for="password" class="label">Mot de passe</label>
      <div class="password-input">
        <input
          :type="showPassword ? 'text' : 'password'"
          id="password"
          v-model="formData.password"
          class="input"
          required
        />
        <button
          type="button"
          @click="showPassword = !showPassword"
          class="password-toggle"
        >
          <EyeOff v-if="showPassword" class="icon" />
          <Eye v-else class="icon" />
        </button>
      </div>
    </div>

    <div class="form-group">
      <label for="specialty" class="label">Spécialité(s)</label>
      <input
        type="text"
        id="specialty"
        v-model="formData.specialty"
        class="input"
        required
      />
    </div>

    <div class="form-group">
      <label for="experience" class="label">Années d'expérience</label>
      <input
        type="number"
        id="experience"
        v-model="formData.experience"
        min="0"
        class="input"
        required
      />
    </div>

    <div class="form-group">
      <label for="location" class="label">Zone d'intervention</label>
      <input
        type="text"
        id="location"
        v-model="formData.location"
        class="input"
        required
      />
    </div>

    <button type="submit" class="btn btn-primary">S'inscrire</button>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'

const showPassword = ref(false)

interface FormData {
  name: string
  email: string
  password: string
  specialty: string
  experience: number | undefined
  location: string
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  password: '',
  specialty: '',
  experience: undefined,
  location: ''
})

const handleSubmit = () => {
  console.log('Craftsman Form submitted:', formData)
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.password-input {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--primary-400);
}

.password-toggle:hover {
  color: var(--primary-600);
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}
</style>