<template>
  <div class="container">
    <h1 class="main-title">Nos Artisans</h1>

    <!-- Carrousel des réalisations -->
    <div class="carousel">
      <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-slide"
          :class="{ active: index === currentSlide }"
      >
        <img :src="image.src" :alt="image.alt" />
      </div>
      <div class="carousel-controls">
        <button @click="prevSlide">‹</button>
        <button @click="nextSlide">›</button>
      </div>
    </div>

    <!-- Catégories -->
    <div class="categories">
      <button
          v-for="cat in categories"
          :key="cat"
          :class="['category-btn', { active: selectedCategorie === cat }]"
          @click="selectedCategorie = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Liste des artisans -->
    <div class="artisan-list">
      <div
          v-for="artisan in filteredArtisans"
          :key="artisan.id"
          class="artisan-card"
          @click="selectArtisan(artisan)"
      >
        <img :src="artisan.image" :alt="artisan.nom" />
        <h2>{{ artisan.nom }}</h2>
        <p>Catégorie : {{ artisan.categorie.join(', ') }}</p>
      </div>
    </div>

    <!-- Fiche artisan -->
    <div v-if="artisanSelectionne" class="modal-overlay" @click.self="artisanSelectionne = null">
      <div class="modal">
        <button class="close-btn" @click="artisanSelectionne = null">×</button>
        <h2>{{ artisanSelectionne.nom }}</h2>
        <img :src="artisanSelectionne.image" />
        <p><strong>Catégorie(s):</strong> {{ artisanSelectionne.categorie.join(', ') }}</p>
        <p><strong>Expérience:</strong> {{ artisanSelectionne.experience }} ans</p>
        <p><strong>Site web:</strong> <a :href="artisanSelectionne.siteWeb" target="_blank">{{ artisanSelectionne.siteWeb }}</a></p>
        <p><strong>Zone d'intervention:</strong> Voir carte ci-dessous</p>
        <div class="carte-placeholder">Carte fictive</div>
        <p><strong>Avis vérifié:</strong> {{ artisanSelectionne.avis }}</p>
        <p><strong>Inscrit depuis:</strong> {{ artisanSelectionne.inscription }}</p>
        <p><strong>Description:</strong> {{ artisanSelectionne.description }}</p>
        <p><strong>J'aime:</strong> {{ artisanSelectionne.jaime }}</p>
        <p><strong>J'aime pas:</strong> {{ artisanSelectionne.jaimePas }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: 'https://via.placeholder.com/800x400?text=Projet+1', alt: 'Projet 1' },
        { src: 'https://via.placeholder.com/800x400?text=Projet+2', alt: 'Projet 2' },
        { src: 'https://via.placeholder.com/800x400?text=Projet+3', alt: 'Projet 3' },
      ],
      currentSlide: 0,
      categories: ['Tous', 'Travail du bois', 'Métallurgie', 'Éco building'],
      selectedCategorie: 'Tous',
      artisans: [
        {
          id: 1,
          nom: 'Jean Dupont',
          categorie: ['Travail du bois'],
          experience: 12,
          siteWeb: 'https://jeanbois.fr',
          image: 'https://via.placeholder.com/300x200?text=Jean',
          avis: 'Travail soigné et rapide',
          inscription: '2019',
          description: 'Artisan menuisier spécialisé dans les meubles sur-mesure.',
          jaime: 'Les matériaux nobles',
          jaimePas: 'Les délais trop courts',
        },
        {
          id: 2,
          nom: 'Marie Le Métal',
          categorie: ['Métallurgie'],
          experience: 8,
          siteWeb: 'https://metalmarie.fr',
          image: 'https://via.placeholder.com/300x200?text=Marie',
          avis: 'Créative et à l’écoute',
          inscription: '2021',
          description: 'Spécialiste de la ferronnerie décorative.',
          jaime: 'Les défis créatifs',
          jaimePas: 'Le travail bâclé',
        },
        {
          id: 3,
          nom: 'Léo Éco',
          categorie: ['Éco building'],
          experience: 10,
          siteWeb: 'https://eco-leo.fr',
          image: 'https://via.placeholder.com/300x200?text=Leo',
          avis: 'Respectueux de l’environnement',
          inscription: '2017',
          description: 'Construction éco-responsable avec des matériaux durables.',
          jaime: 'L’écologie',
          jaimePas: 'Le gaspillage',
        },
      ],
      artisanSelectionne: null,
    };
  },
  computed: {
    filteredArtisans() {
      if (this.selectedCategorie === 'Tous') return this.artisans;
      return this.artisans.filter(a => a.categorie.includes(this.selectedCategorie));
    },
  },
  methods: {
    selectArtisan(artisan) {
      this.artisanSelectionne = artisan;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style>
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f0f2f5;
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}

.main-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.carousel {
  position: relative;
  overflow: hidden;
  height: 400px;
  margin-bottom: 2rem;
}

.carousel-slide {
  display: none;
  height: 100%;
}

.carousel-slide.active {
  display: block;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.carousel-controls button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.category-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #007bff;
  background-color: white;
  color: #007bff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn.active,
.category-btn:hover {
  background-color: #007bff;
  color: white;
}

.artisan-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.artisan-card {
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.artisan-card:hover {
  transform: translateY(-5px);
}

.artisan-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}

.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.modal img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 6px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
}

.carte-placeholder {
  height: 150px;
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  border-radius: 6px;
}
</style>