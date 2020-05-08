import React from 'react';
import { makeStyles, InputLabel, MenuItem, FormHelperText, FormControl, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
    maxWidth: 700,
  },
}))

function Dropdown(props) {
  const classes = useStyles();
  const [name, setName] = React.useState('')

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const RenderOptions = props.users.map((user) => {
    return (
      <MenuItem value={user.name}>{user.name}</MenuItem>
    )
  });


  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">User</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={name}
        onChange={handleChange}
        label="user"
      >
        {RenderOptions}
      </Select>

    </FormControl>
  );

}

export default Dropdown;