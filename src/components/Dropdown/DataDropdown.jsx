import React from 'react';
import {
  makeStyles,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
    maxWidth: 700,
  },
}));

function DataDropdown(props) {
  const classes = useStyles();

  return (
    <FormControl variant='outlined' className={classes.formControl} disabled>
      <InputLabel id='demo-simple-select-outlined-label'>
        Chat Selection
      </InputLabel>
      <Select
        labelId='demo-simple-select-outlined-label'
        id='demo-simple-select-outlined'
        defaultValue='Message Frequency'
        onChange={e => props.changeChart(e.target.value)}
        label='Chat-Selection'
      >
        <MenuItem value='edmundxin.me'>edmundxin.me</MenuItem>
      </Select>
    </FormControl>
  );
}

export default DataDropdown;
