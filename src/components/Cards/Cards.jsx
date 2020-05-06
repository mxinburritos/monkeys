import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Cards.module.css';
import cx from 'classnames';

function RenderCardItem({ person }) {
  return (
    <Grid item component={Card} xs className={styles.card}>
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
  return (
    <div className={styles.container}>
      <Grid container spacing={10} p={1} m={1}>
        {props.people.map((person) => (
          <RenderCardItem person={person} />
        ))}
      </Grid>
    </div>
  )
}

export default Cards;