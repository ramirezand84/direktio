<!-- src/components/Header.vue -->
<template>
  <header class="p-content">
    <div>
      <i @click="toggleAside" class="fa-solid fa-bars"></i>
      <h1>{{ routeName }}</h1>
    </div>
    <nav>
      <div class="item-header">
        <i class="fa-regular fa-bell"></i>
        <span>5</span>
      </div>
      <div class="item-header">
        <i class="fa-regular fa-message"></i>
        <span>2</span>
      </div>
      <div class="item-header active">
        <i class="fa-solid fa-gifts"></i>
        <span>1</span>
      </div>
      <div class="info-user">
        <div><img src="/assets/user.jpeg" alt="Logo" class="user" /></div>
        <p>Hola,<span>Roberto</span></p>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useUIStore } from '../stores/uiStore';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const uiStore = useUIStore();
const toggleAside = () => {
  uiStore.toggleAside();
};

// Accede a la ruta actual
const route = useRoute();

// Computa dinámicamente el nombre de la ruta actual
const routeName = computed(() => route.name || 'Doctor dashboard');
</script>
