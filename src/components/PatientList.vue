<template>
  <div>
    <div v-if="sortedPatients.length > 0">
      <table class="patient-table">
        <thead>
          <tr>
            <th class="checkbox-header"><input type="checkbox" v-model="selectAll" @change="toggleAllCheckboxes" /></th>
            <th @click="sortTable('id')">Id <i :class="getSortIcon('id')"></i></th>
            <th @click="sortTable('name')">Nombre <i :class="getSortIcon('name')"></i></th>
            <th v-if="isDesktop" @click="sortTable('age')">Edad <i :class="getSortIcon('age')"></i></th>
            <th v-if="isDesktop" @click="sortTable('gestor')">Gestor <i :class="getSortIcon('gestor')"></i></th>
            <th v-if="isDesktop" @click="sortTable('regime')">Régimen <i :class="getSortIcon('regime')"></i></th>
            <th @click="sortTable('status')">Estado <i :class="getSortIcon('status')"></i></th>
            <th v-if="isDesktop" @click="sortTable('ips_name')">IPS name <i :class="getSortIcon('ips_name')"></i></th>
            <th>Tipo gestión</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(patient, index) in sortedPatients" :key="index">
            <td class="checkbox-cell">
              <input type="checkbox" v-model="selectedPatients" :value="patient.name" />
            </td>
            <td>{{ patient.id }}</td>
            <td>{{ patient.name }}</td>
            <td v-if="isDesktop">{{ patient.age }}{{ isDesktop }} años</td>
            <td v-if="isDesktop">{{ patient.gestor }}</td>
            <td v-if="isDesktop">{{ patient.regime }}</td>
            <td><span class="status" :class="{ 'row-status': patient.status==='Inactivo'}"><i class="fa-solid fa-circle"></i> {{ patient.status }}</span></td>
            <td v-if="isDesktop">{{ patient.ips_name }}</td>
            <td>{{ patient.gestion.gestion_type }}</td>
            <td class="actions"><a href="#"><i class="fa-solid fa-pencil t-gray"></i></a><a href="#"><i class="fa-solid fa-trash t-red"></i></a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else>No hay pacientes disponibles.</p>
  </div>
  <div class="pagination">
    Mostrando <span>20</span> de <span class="bold">{{ patients.total_patients }}</span>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { Patient } from '../types/Patient';
import { ref, onMounted, onUnmounted,computed, watch } from 'vue';

const props = defineProps<{
  patients: {
    total_patients: number;
    results: Array<Patient>;
  };
}>();
const selectedPatients = ref<string[]>([]);
const selectAll = ref(false);
const sortKey = ref('id');
const sortOrder = ref('asc');

const toggleAllCheckboxes = () => {
  if (selectAll.value) {
    selectedPatients.value = props.patients.results.map(patient => patient.name);
  } else {
    selectedPatients.value = [];
  }
};

// Función para ordenar la tabla
const sortTable = (key:any) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortOrder.value = 'asc';
  }
};

// Función para obtener el icono de ordenamiento
const getSortIcon = (key:any) => {
  if (sortKey.value === key) {
    return sortOrder.value === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
  } else if (!sortKey.value) {
    // Valor predeterminado para el primer ordenamiento
    return 'fas fa-sort'; // Icono de ordenamiento por defecto
  } else {
    return 'fas fa-sort'; // Icono de ordenamiento por defecto
  }
};

// Propiedad computada para obtener los pacientes ordenados
const sortedPatients = computed(() => {

  // Verifica que props.patients.results sea un array
  if (!Array.isArray(props.patients.results)) {
    return [];
  }
  
  return [...props.patients.results].sort((a, b) => {
    if (sortKey.value) {
      const aValue = a[sortKey.value];
      const bValue = b[sortKey.value];
      if (aValue < bValue) return sortOrder.value === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder.value === 'asc' ? 1 : -1;
    }
    return 0;
  });
});

watch(selectAll, (newVal) => {
  toggleAllCheckboxes();
});
const isDesktop = ref(window.innerWidth >= 768);

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 768;
};

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

onMounted(() => {
  window.addEventListener('resize', handleResize);
});
</script>

