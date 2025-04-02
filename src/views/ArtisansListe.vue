<template>
  <div class="artisan-list">
    <nav-bar />

    <h1>Nos artisans partenaires</h1>

    <div class="artisans-grid">
      <div v-for="artisan in artisans" :key="artisan.id" class="artisan-card">
        <img :src="artisan.photo" :alt="artisan.name" class="artisan-photo">
        <h3>{{ artisan.name }}</h3>
        <p>{{ artisan.specialty }}</p>
        <p>{{ artisan.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'ArtisansListe',
  components: { NavBar },
  data() {
    return {
      artisans: [
        {
          id: 1,
          name: 'Jean Dupont',
          specialty: 'Ébénisterie',
          location: 'Paris',
          photo: '@/assets/artisan1.jpg'
        },
        // Ajoutez d'autres artisans ici
      ]
    }
  }
}
</script>

<style scoped>
.artisan-list {
  padding: 2rem;
}

.artisans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.artisan-card {
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.artisan-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}
</style>
