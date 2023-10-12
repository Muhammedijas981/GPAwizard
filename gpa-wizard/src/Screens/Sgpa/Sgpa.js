import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Input from '../../Components/Input';
import './style.css';

const Sgpa = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        backgroundColor: 'white',
      },
    },
  };

  

  const departments = [
    'CSE',
    'EC',
    'EEE',
    'ME',
    'CE'
  ];

  const semesters = [
    'Semester 1',
    'Semester 2',
    'Semester 3',
    'Semester 4',
    'Semester 4',
    'Semester 5',
    'Semester 6',
    'Semester 7',
    'Semester 8',
  ];
  // Initialize the state with an empty string instead of undefined
  const [department, setdepartment] = React.useState('');
  const [semester, setSemesters] = React.useState('');

  const depHandleChange = (event) => { // Remove type annotation
    setdepartment(event.target.value);
  };

  const semHandleChange = (event) => {
    setSemesters(event.target.value);
  };

  const [renderComponent, setRenderComponent] = useState(false);
  const handleButtonClick = () => {
    // Hide the current component
    setRenderComponent(false);

    // Get the reference to the current component
    const currentComponent = document.querySelector('.main');

    // Hide the current component by setting its display property to none
    currentComponent.style.display = 'none';
  };

  return (
    <div className="main">
      <div style={{ display: 'flex', flex: '1' }}></div>
      <div className='input-box'>
        <div>
          <FormControl
            sx={{
              m: 1,
              width: 300,
              border: '1px solid gray',
              borderRadius: '5px',
            }}
          >
            <InputLabel
              id="demo-single-name-label"
              style={{
                color: 'white',
              }}
            >
              Branch
            </InputLabel>
            <Select
              labelId="demo-single-name-label"
              id="demo-single-name"
              value={department}
              onChange={depHandleChange}
              input={
                <OutlinedInput
                  label="Department"
                />
              }
              MenuProps={MenuProps}
              sx={{
                color: 'white'
              }}
            >
              {departments.map((departments) => (
                <MenuItem key={departments} value={departments}>
                  {departments}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl
            sx={{
              m: 1,
              width: 300,
              border: '1px solid gray',
              borderRadius: '5px',
            }}
          >
            <InputLabel
              id="demo-single-name-label"
              style={{
                color: 'white',
              }}
            >
              Semester
            </InputLabel>
            <Select
              labelId="demo-single-name-label"
              id="demo-single-name"
              value={semester}
              onChange={semHandleChange}
              input={
                <OutlinedInput
                  label="Semester"
                />
              }
              MenuProps={MenuProps}
              sx={{
                color: 'white'
              }}
            >
              {semesters.map((semesters) => (
                <MenuItem key={semesters} value={semesters}>
                  {semesters}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='submit'>
        <Button variant="contained" onClick={handleButtonClick}>Next <ChevronRightIcon/></Button>
      </div>

      {renderComponent ? <Input /> : null}
    </div>
  );
};

export default Sgpa;
