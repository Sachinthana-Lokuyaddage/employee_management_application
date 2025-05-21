import React from 'react';
import {
  Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Button
} from '@mui/material';

const ConfirmDialog = ({ open, onClose, onConfirm }) => (
  <Dialog open={open} onClose={onClose}>
     {/* Modal confirmation dialog */}
    <DialogTitle>Confirm Deletion</DialogTitle>
    <DialogContent>
      <DialogContentText>
         {/* Message inside dialog */}
        Are you sure you want to delete this employee?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>No</Button>
      <Button onClick={onConfirm}>Yes</Button>
    </DialogActions>
  </Dialog>
);

export default ConfirmDialog;