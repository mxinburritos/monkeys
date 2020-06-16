import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none',
  },
}));

const UploadButton = props => {
  const classes = useStyles();
  const [file, setFile] = useState([]);
  const [uploadedFile, setUploadedFile] = useState({});

  useEffect(() => {
    console.log(file);
  }, [file]);

  const onChange = e => {
    props.handleUpload(e.target.files[0]);
  };

  const handleChange = async () => {
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  return (
    <>
      <input
        accept='json/*'
        className={classes.input}
        name='file'
        id='contained-button-file'
        onChange={onChange}
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
