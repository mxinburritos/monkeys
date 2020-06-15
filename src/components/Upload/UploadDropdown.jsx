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

function UploadDropdown(props) {
  const classes = useStyles();

  const renderOptions = props.options.map(option => {
    return <MenuItem value={option.title}> {option.title}</MenuItem>;
  });

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <InputLabel id='demo-simple-select-outlined-label'>
        Chat Selection
      </InputLabel>
      <Select
        labelId='demo-simple-select-outlined-label'
        id='demo-simple-select-outlined'
        defaultValue={props.options[0].title}
        onChange={e => props.handleChange(e.target.value)}
        label='Chat-Selection'
      >
        {renderOptions}
      </Select>
    </FormControl>
  );
}

export default UploadDropdown;
