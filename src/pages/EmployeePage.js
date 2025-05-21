import React, { useState, useEffect } from 'react';
import {
  Button, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';
import EmployeeForm from '../components/EmployeeForm';
import ConfirmDialog from '../components/ConfirmDialog';

import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from '../services/employeeService';


const EmployeePage = () => {
  const [employees, setEmployees] = useState([]); // Employee list
  const [formOpen, setFormOpen] = useState(false); // Controls modal visibility
  const [formData, setFormData] = useState({ fullName: '', email: '', department: '', hireDate: '' }); // Form state
  const [deleteId, setDeleteId] = useState(null); // ID of employee to delete

  // Fetch employees from the backend
   const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Failed to fetch employees:', error);
      alert('Failed to fetch employees.');
    }
  };

  useEffect(() => {
    fetchEmployees(); // Load on mount
  }, []);

  // Submit form (Add or Update)
  const handleFormSubmit = async () => {
    try {
      if (formData.id) {
        await updateEmployee(formData.id, formData);
      } else {
        await createEmployee(formData);
      }
      setFormOpen(false);
      setFormData({ fullName: '', email: '', department: '', hireDate: '' });
      fetchEmployees();
    } catch (error) {
      console.error('Failed to submit form:', error);
      alert('Failed to submit employee data.');
    }
  };

  // Delete employee by ID
 const handleDelete = async () => {
    try {
      await deleteEmployee(deleteId);
      setDeleteId(null);
      fetchEmployees();
    } catch (error) {
      console.error('Failed to delete employee:', error);
      alert('Failed to delete employee.');
    }
  };

  // Populate form for editing
  const openEditForm = (employee) => {
    setFormData(employee);
    setFormOpen(true);
  };

  return (
    <>
      {/* Add Button */}
      <Button variant="contained" onClick={() => setFormOpen(true)} sx={{ mb: 2 }}>
        Add Employee
      </Button>

      {/* Employee Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Hire Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.id}</TableCell>
                <TableCell>{emp.fullName}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{new Date(emp.hireDate).toLocaleDateString()}</TableCell>
                <TableCell>
                  {/* Edit/Delete Buttons */}
                  <IconButton onClick={() => openEditForm(emp)}><Edit /></IconButton>
                  <IconButton onClick={() => setDeleteId(emp.id)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Form Modal */}
      <EmployeeForm
        open={formOpen}
        handleClose={() => setFormOpen(false)}
        handleSubmit={handleFormSubmit}
        formData={formData}
        setFormData={setFormData}
      />

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        open={Boolean(deleteId)}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default EmployeePage;
