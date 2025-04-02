<template>
  <div id="app">
    <header>
      <img alt="Neoartis logo" src="./assets/logo_neoartis.png">

    </header>

    <main>
      <section class="hero">
        <h2>Bienvenue chez NEOartis</h2>
        <p>Votre plateforme de mise en relation pour la réédition d'objets anciens</p>
      </section>

      <section class="about">
        <h2>À propos de nous</h2>
        <p>NEOartis connecte les clients souhaitant rééditer des objets anciens avec des artisans talentueux.</p>
      </section>

      <section class="cta">
        <h2>  Artisans ? rejoignez nous sur le salon </h2>
        <button @click="redirectToForm">Commencer maintenant</button>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 NEOartis. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    redirectToForm() {
      window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdWE3lOQN4FKMVKmCQjUQAlBGdd_gMfSwEES9xGsZv_1cAOTQ/viewform?usp=preview';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/background.png'); /* Remplacez par le chemin de votre image */
  background-size: cover; /* Couvre toute la page */
  background-position: center; /* Centre l'image */
  min-height: 100vh; /* Assure que la page prend au moins la hauteur de l'écran */
}

header {
  padding: 20px;
}

header img {
  max-width: 100px;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* Fond blanc semi-transparent pour le contraste */
  border-radius: 8px; /* Coins arrondis */
}

section {
  margin-bottom: 40px;
}

.hero {
  padding: 40px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

footer {
  margin-top: 40px;
}
</style>
