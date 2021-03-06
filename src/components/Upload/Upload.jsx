import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import UploadDropdown from './UploadDropdown';
import UploadButton from './UploadButton';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const Upload = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems='center' justify='center'>
        <Grid item>
          <UploadButton handleUpload={props.handleUpload} />
        </Grid>
        <Grid item>
          <UploadDropdown
            options={props.messages}
            handleChange={props.handleChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Upload;
