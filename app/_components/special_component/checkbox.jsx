"use client";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';


const MenuProps = {
  PaperProps: {
    style: {
      hight: 40,
      width: 250,
    },
  },
};

const names = [
  'Villa',
  'Twinhouse',
  'Penthouse',
  'Chalet',
  'Studio',
  'Cabin',
  'Clinic',
  'Office',
  'Retail',
  'Townhouse',
];

export default function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div> 
      <FormControl sx={{ m: 1 , width: 200}} >
        <InputLabel sx={{ hight: 40}} id="demo-multiple-checkbox-label">...</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>
  );
}