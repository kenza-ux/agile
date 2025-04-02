<template>
<RouterView/>
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