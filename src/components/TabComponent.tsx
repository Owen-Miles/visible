import React, { useState } from 'react';
import { Tabs, Tab, Container, Box } from '@mui/material';
import MyForm from './InputForm';
import SimpleCharts from './DataOutput';



// Placeholder data output component
const DataOutput: React.FC = () => {
  return <div>This is the data output component</div>;
};

const MyTabs: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Container maxWidth="md">
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Input Form" />
        <Tab label="Data Output" />
      </Tabs>
      <Box sx={{pt:4, pb: 4}}>
      <div hidden={tabIndex !== 0}>
        {tabIndex === 0 && <MyForm />}
      </div>
      <div hidden={tabIndex !== 1}>
        {tabIndex === 1 && <SimpleCharts />}
      </div>
      </Box>
    </Container>
  );
};

export default MyTabs;
