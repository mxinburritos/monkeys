import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none',
  },
}));

const UploadButton = () => {
  const classes = useStyles();

  return (
    <>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
      />
      <label htmlFor='contained-button-file'>
        <Button
          variant='contained'
          color='primary'
          component='span'
          startIcon={<CloudUploadIcon />}
          size='large'
        >
          Upload
        </Button>
      </label>
    </>
  );
};

export default UploadButton;
