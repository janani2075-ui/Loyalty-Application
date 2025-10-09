import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

export const getCustomers = () => axios.get(`${API_BASE}/customers`);
export const addCustomer = (customer) => axios.post(`${API_BASE}/customers`, customer);
export const updateCustomer = (id, customer) => axios.put(`${API_BASE}/customers/${id}`, customer);
export const deleteCustomer = (id) => axios.delete(`${API_BASE}/customers/${id}`);
