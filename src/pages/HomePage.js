import React from 'react';
import { Typography, Box } from '@mui/material';

const HomePage = () => (
  <Box textAlign="center">
    <Typography variant="h4" gutterBottom>
      Welcome to the Employee Management System
    </Typography>
    <Typography variant="body1">
      Use the navigation bar to manage employees.
    </Typography>
  </Box>
);

export default HomePage;
