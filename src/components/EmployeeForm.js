import React from 'react';
import {
  Dialog, DialogActions, DialogContent, DialogTitle,
  TextField, Button
} from '@mui/material';

const EmployeeForm = ({
  open,
  handleClose,
  handleSubmit,
  formData = {}, // Fallback to empty object
  setFormData,
  validationErrors = {} // Optional: for future form validation
}) => {
  if (!formData || !setFormData) return null; // Ensure props are valid

  return (
    <Dialog open={open} onClose={handleClose}>
       {/* Dialog is a modal window */}
      <DialogTitle>{formData.id ? 'Edit' : 'Add'} Employee</DialogTitle>
      <DialogContent>
         {/* DialogContent holds form fields */}
        <TextField
          margin="dense" label="Full Name" fullWidth
          value={formData.fullName || ''}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          error={!!validationErrors.fullName}
          helperText={validationErrors.fullName}
        />
        <TextField
          margin="dense" label="Email" fullWidth
          value={formData.email || ''}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={!!validationErrors.email}
          helperText={validationErrors.email}
        />
        <TextField
          margin="dense" label="Department" fullWidth
          value={formData.department || ''}
          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          error={!!validationErrors.department}
          helperText={validationErrors.department}
        />
        <TextField
          margin="dense" label="Hire Date" type="date" fullWidth InputLabelProps={{ shrink: true }}
          value={formData.hireDate || ''}
          onChange={(e) => setFormData({ ...formData, hireDate: e.target.value })}
          error={!!validationErrors.hireDate}
          helperText={validationErrors.hireDate}
        />
      </DialogContent>
      <DialogActions>
         {/* DialogActions is used for buttons at the bottom */}
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{formData.id ? 'Update' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeForm;
