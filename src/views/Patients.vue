<template>
  <div class="section-patiens">
    <div class="header-section">
      <button class="btn-green"><i class="fa-solid fa-plus"></i> Agregar Nuevo</button>
      <div class="searchbar">
        <div>
          <input type="text" placeholder="Buscar...">
          <i class="fa-solid fa-magnifying-glass ico-search"></i>
        </div>
          <a href=""><i class="fa-solid fa-gear"></i></a>
      </div>
    </div>
    <PatientList :patients="patients" /> <!-- Pasa patients como prop -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PatientList from '../components/PatientList.vue';
import { usePatientStore } from '../stores/patients';

const patientStore = usePatientStore();

// Usar ref para reactividad
const patients = ref([]);

// Fetch patients cuando el componente se monta
onMounted(async () => {
  await patientStore.fetchPatients();
  patients.value = patientStore.patients;
});
</script>