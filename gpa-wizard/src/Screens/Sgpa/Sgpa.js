import React, { useState } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './style.css';

const Sgpa = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const getStyles = (name, selectedNames, theme) => ({
    fontWeight:
      selectedNames.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  });

  const theme = useTheme();
  const [selectedName, setSelectedName] = useState(''); // Changed to a single string

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedName(value); // Set a single string value
  };

  return (
    <div className="main">
      <div className='pass'><h1 style={{color:'white'}}>This is sgpa calculator</h1></div>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-single-name-label">Name</InputLabel>
          <Select
            labelId="demo-single-name-label"
            id="demo-single-name"
            multiple={false} // Set to false to accept a single value
            value={selectedName} // Use a single value
            onChange={handleChange}
            input={<OutlinedInput label="Name" sx={{ color: 'blue' }} />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, [selectedName], theme)} // Pass a single value in an array
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Sgpa;
