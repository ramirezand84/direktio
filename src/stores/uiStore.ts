// src/stores/uiStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUIStore = defineStore('uiStore', () => {
  // El estado debe ser un valor reactivo
  const isAsideVisible = ref(true);

  const toggleAside = () => {
    isAsideVisible.value = !isAsideVisible.value;
  };

  return { isAsideVisible, toggleAside };
});
