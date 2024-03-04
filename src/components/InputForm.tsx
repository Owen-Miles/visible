import React, { useState } from 'react';
import { TextField, MenuItem, Button, Container, FormControl, FormControlLabel, Checkbox, Typography } from '@mui/material';

function MyForm() {
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [dropdown3, setDropdown3] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');
  const [notes, setNotes] = useState('');
  const [isChecked, setIsChecked] = useState(false); // State variable for checkbox

  const studentOptions = [
    'Jane Doe - 12345',
    'Eric Doe - 67890',
    'Cass Doe - 13579',
    'John Doe - 24680',
    'Doe Doe - 98765',
  ];

  const activityOptions = [
    'Group Counseling',
    'Check in/check out',
    'Individual Counseling',
    'Urgent PRN',
    'Indirect Service',
    'Family Engagement'
  ];

  const tierOfServiceOptions = [
    'I - Universal',
    'II - Targeted',
    'III - Intensive',
  ];

  const handleDropdown1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDropdown1(event.target.value);
  };

  const handleDropdown2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDropdown2(event.target.value);
  };

  const handleDropdown3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDropdown3(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleTimeInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeIn(event.target.value);
  };

  const handleTimeOutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeOut(event.target.value);
  };

  const handleNotesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotes(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log({
      dropdown1,
      dropdown2,
      dropdown3,
      date,
      timeIn,
      timeOut,
      notes
    });
  };

  // Function to generate time options in 5-minute increments
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 5) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" sx={{textAlign: 'center'}}>Input Form</Typography>
      <Typography variant="body1" sx={{textAlign: 'center'}}>This does nothing right now. But we'd have a streamlined data input</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          select
          label="Student Name - ID"
          value={dropdown1}
          onChange={handleDropdown1Change}
          fullWidth
          margin="normal"
        >
        {
          studentOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))
        }
        </TextField>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
              color="primary"
            />
          }
          label="Unscheduled?"
        />
        <TextField
          select
          label="Activity"
          value={dropdown2}
          onChange={handleDropdown2Change}
          fullWidth
          margin="normal"
        >
          {activityOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Tier of Service"
          value={dropdown3}
          onChange={handleDropdown3Change}
          fullWidth
          margin="normal"
        >
          {tierOfServiceOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={handleDateChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          select
          label="Time In"
          value={timeIn}
          onChange={handleTimeInChange}
          fullWidth
          margin="normal"
        >
          {generateTimeOptions().map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Time Out"
          value={timeOut}
          onChange={handleTimeOutChange}
          fullWidth
          margin="normal"
        >
          {generateTimeOptions().map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Notes"
          multiline
          rows={4}
          value={notes}
          onChange={handleNotesChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default MyForm;
