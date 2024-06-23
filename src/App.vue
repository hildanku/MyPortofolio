<script setup>
import Button from 'primevue/button';
</script>

<template>
  <div class="container">
    <h1>Hildan K. Utomo</h1>
    <div class="button">
      <Button icon="pi pi-linkedin" severity="info" text rounded aria-label="LinkedIn" />
      <Button icon="pi pi-facebook" severity="info" text rounded aria-label="LinkedIn" />
      <Button icon="pi pi-instagram" severity="help" text rounded aria-label="LinkedIn" />
    </div>
  </div>
  <!-- <Button label="LinkedIn" icon="pi pi-linkedin" severity="info" /> -->

</template>

<style scoped>
.button {

}
.container {
  flex-direction: column; /* Arrange items vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
