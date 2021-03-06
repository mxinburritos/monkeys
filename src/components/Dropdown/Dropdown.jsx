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

function Dropdown(props) {
  const classes = useStyles();

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <InputLabel id='demo-simple-select-outlined-label'>Graph Type</InputLabel>
      <Select
        labelId='demo-simple-select-outlined-label'
        id='demo-simple-select-outlined'
        defaultValue='Message Frequency'
        onChange={e => props.changeChart(e.target.value)}
        label='graph-type'
      >
        <MenuItem value='Message Frequency'>Message Frequency</MenuItem>
        <MenuItem value='Message Count'>Message Count</MenuItem>
        <MenuItem value='N-Word Count'>N-Word Count</MenuItem>
        <MenuItem value='Swear Word Count'>Swear Word Count</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Dropdown;
