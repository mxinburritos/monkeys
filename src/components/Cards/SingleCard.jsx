import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import { makeStyles } from '@material-ui/core/styles';

import styles from './Cards.module.css';
import cx from 'classnames';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const SingleCard = (props) => {
  return (
    <Grid item component={Card} xs className={styles.card}>
      <Typography color="textPrimary" variant="h6" gutterBottom >{props.person.name}</Typography>
      <Typography color="error">
        <CountUp start={0} end={parseInt(props.person.swear_words)} duration={2.75} />
      </Typography>
      <Typography>{props.person.activity_index}</Typography>
      <Typography variant="body2">{props.person.description}</Typography>
    </Grid>
  )
}

export default SingleCard;