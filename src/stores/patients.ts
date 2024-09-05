import { defineStore } from 'pinia';
import { Patient } from '../types/Patient';
export const usePatientStore = defineStore('patients', {
  state: () => ({
    patients: [] as Array<Patient>,
  }),
  actions: {
    async fetchPatients() {
      const response = await fetch('/data/patients.json');
      this.patients = await response.json();
      
    },
  },
});
