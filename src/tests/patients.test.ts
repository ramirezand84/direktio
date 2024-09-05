import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Patients from '../views/Patients.vue';

describe('Patients.vue', () => {
  it('renders patient list', () => {
    const wrapper = mount(Patients);
    expect(wrapper.text()).toContain('Patients');
  });
});
