import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static">
    {/* AppBar provides a top navigation/header bar */}
    <Toolbar>
      {/* Toolbar provides padding and layout for content inside AppBar */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {/* Typography is used for styled text; sx={{ flexGrow: 1 }} pushes buttons to the right */}
        Employee Management
      </Typography>
      <Button color="inherit" component={Link} to="/">
        {/* MUI Button styled to look like text links in the AppBar */}
        Home
      </Button>
      <Button color="inherit" component={Link} to="/employees">
        Employees
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
