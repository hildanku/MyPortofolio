<script setup>
import Button from 'primevue/button';
import { ref } from 'vue';
import Menubar from 'primevue/menubar';
import Image from 'primevue/image';
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        to: '/'
    },
    {
        label: 'About',
        icon: 'pi pi-fw pi-info-circle',
        to: '/about'
    }
]);
</script>

<template>
<Menubar :model="items" />
  <div class="container">
    <Image class="rounded-image"/>
    <h1>Hildan K. Utomo</h1>
    <div class="button">
      <Button icon="pi pi-linkedin" severity="info" text rounded aria-label="LinkedIn" />
      <Button icon="pi pi-facebook" severity="info" text rounded aria-label="LinkedIn" />
      <Button icon="pi pi-instagram" severity="help" text rounded aria-label="LinkedIn" />
    </div>
  </div>


</template>

<style scoped>
.rounded-image {
  border-radius: 50%;
  padding: 5px;
  margin-bottom: 10px;
  background-image: url("../src/assets/linkedin.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 250px;
  height: 250px;
}
.container {
  flex-direction: column; /* Arrange items vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
