import React from 'react';
import { makeStyles, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core';

function Dropdown() {
  const [name, setName] = React.useState('')

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={name}
        onChange={handleChange}
        label="Age"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

    </FormControl>
  );

}

export default Dropdown;