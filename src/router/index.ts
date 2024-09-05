import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Patients from '../views/Patients.vue';
import Team from '../views/Team.vue';
import Doctor from '../views/Doctor.vue';
import Specialty from '../views/Specialty.vue';
import Settings from '../views/Settings.vue';

const routes = [
  {
    path: '/',
    name: 'Tablero',
    meta: { icon: 'fa-solid fa-chart-line'},
    component: Home,
  },
  {
    path: '/equipo',
    name: 'Equipo',
    meta: { icon: 'fa-solid fa-people-group'},
    component: Team,
  },
  {
    path: '/doctor',
    name: 'Doctor',
    meta: { icon: 'fa-solid fa-user-doctor'},
    component: Doctor,
  },
  {
    path: '/especialidad',
    name: 'Especialidad',
    meta: { icon: 'fa-solid fa-house-medical'},
    component: Specialty,
  },
  {
    path: '/pacientes',
    name: 'Pacientes',
    meta: { icon: 'fa-solid fa-hospital-user'},
    component: Patients,
  },
  {
    path: '/configuracion',
    name: 'Configuración',
    meta: { icon: 'fa-solid fa-gear'},
    component: Settings,
  },
  // Puedes agregar más rutas aquí
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
