<!-- src/App.vue -->
<template>
  <div class="container">
    <Sidebar />
    <main>
      <Header />
      <div class="content p-content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
</script>

<style scoped>

</style>
