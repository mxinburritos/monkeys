import React from 'react';
import { Card, CardContent, Typography, Grid, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Cards.module.css';
import cx from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function RenderCardItem({ person }) {
  return (
    <Grid item component={Card} xs={12} md={3} className={styles.card}>
      <CardContent>
        <Typography color="textPrimary" variant="h6" gutterBottom >{person.name}</Typography>
        <Typography color="error">
          <CountUp start={0} end={person.swear_words} duration={2.75} />
        </Typography>
        <Typography color="textsecondary">{person.activity_index}</Typography>
        <Typography variant="body2">{person.description}</Typography>
      </CardContent>
    </Grid>
  );
}

const Cards = (props) => {
  const classes = useStyles();

  const Card = props.people.map((person) => {
    return (
      <Grid container spacing={3}>
        <RenderCardItem person={person} />
      </Grid>
    );
  });

  return (
    <div className={classes.root}>
      {Card}
    </div>
  );
}

export default Cards;