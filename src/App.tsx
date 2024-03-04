import React from 'react';
import { Typography } from '@mui/material';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import MyTabs from './components/TabComponent';
import LoginPage from './components/LoginPage';

function App() {
  const { isAuthenticated } = useAuth0();

  console.log(isAuthenticated);
  return (
    <div className="App">
      <Typography variant="h3" sx={{textAlign: 'center'}}>Visible</Typography>
        <MyTabs />
      {/* {isAuthenticated ? <MyTabs /> : <LoginPage />} */}
    </div>
  );
}

export default App;
