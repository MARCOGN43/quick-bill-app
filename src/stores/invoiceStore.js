import { writable } from 'svelte/store';

export const invoiceData = writable({
  general: {
    invoiceNumber: '',
    date: '',
    dueDate: ''
  },
  products: [],
  payment: {
    customerName: '',
    paymentDate: '',
    method: '',
    reference: ''
  }
});
