import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Grid } from '@mui/material';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <h2>Please log in to continue</h2>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </Box>
    </Grid>
  );
};

export default LoginPage;
