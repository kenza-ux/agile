<template>
  <div id="app">
    <main>
      <div class="logo-container">
        <img class="partner-logo" src="./assets/chambre_commerce-logo.png" alt="Chambre de Commerce">
        <img class="main-logo" src="./assets/logo-neoartis.png" alt="Neoartis logo">
      </div>

      <section class="hero">
        <h2>Bienvenue chez NEOartis</h2>
        <p>Votre plateforme de mise en relation pour la réédition d'objets anciens</p>
      </section>

      <section class="about">
        <h2>À propos de nous</h2>
        <p>NEOartis connecte les clients souhaitant rééditer des objets anciens avec des artisans talentueux.</p>
      </section>

      <section class="cta">
        <h2>Artisans ? rejoignez nous sur le salon</h2>
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
  background-image: url('./assets/background.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 30px;
}

.partner-logo,
.main-logo {
  height: 80px;
  width: auto;
  object-fit: contain;
}

section {
  margin-bottom: 60px;
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
