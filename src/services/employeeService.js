// src/services/employeeService.js
import axios from 'axios';

const API_URL = 'https://localhost:7270/api/employees';

// GET all employees
export const getEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// POST a new employee
export const createEmployee = async (employee) => {
  await axios.post(API_URL, employee);
};

// PUT update employee
export const updateEmployee = async (id, employee) => {
  await axios.put(`${API_URL}/${id}`, employee);
};

// DELETE employee by ID
export const deleteEmployee = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
