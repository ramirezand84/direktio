<!-- src/components/Sidebar.vue -->
<template>
  <aside :class="{ 'aside-hidden': !isAsideVisible, 'aside-visible': isAsideVisible }">
    <img src="/assets/logo.png" alt="Logo" class="logo" />
    <h2>Menu</h2>
    <div class="close-menu">
      <i @click="toggleAside" class="fa-solid fa-bars"></i>
    </div>
    <nav>
      <ul>
        <!-- Genera los enlaces dinámicamente -->
        <li v-for="route in availableRoutes" :key="route.name" :class="{ active: isActive(route) }">
          <i :class="route.meta.icon"></i> 
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="copyright">
        <p>Direktio admin dashoard</p>
        <span>{{ year }} Todos los derechos reservados</span>
        <span>Realizado con <i class="fa-solid fa-heart"></i> por: ramirezand</span>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUIStore } from '../stores/uiStore';
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';
const router = useRouter();
const uiStore = useUIStore();

const { isAsideVisible } = storeToRefs(uiStore);
const route = useRoute()
const isActive = (currentRoute:any) => {
  return route.path === currentRoute.path;
};

const toggleAside = () => {
  uiStore.toggleAside();
};

// Filtra las rutas para solo mostrar las que tienen un nombre
const availableRoutes = computed(() => {
  return router.getRoutes().filter(route => route.name);
});

const date = new Date();
const year = date.getFullYear();
</script>