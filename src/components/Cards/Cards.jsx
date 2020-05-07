import React, { useState } from 'react';
import { Grid, Card, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import { makeStyles } from '@material-ui/core/styles';

import styles from './Cards.module.css';

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
    <Grid item component={Card} xs={12} md={3} className={styles.card}>
      <Typography color="textPrimary" variant="h6" gutterBottom >{props.person.name}</Typography>
      <Typography color="error">
        <CountUp start={0} end={parseInt(props.person.swear_words)} duration={2.75} />
      </Typography>
      <Typography>{props.person.activity_index}</Typography>
      <Typography variant="body2">{props.person.description}</Typography>
    </Grid>
  )
}

function Cards({ people }) {
  const [peopleData, setPeopleData] = useState(people);

  console.log(peopleData[1]);

  return (
    <div className={styles.rows}>
      <Grid container spacing={10} p={1} m={1} justify="center">
        <SingleCard person={peopleData[0]} />
        <SingleCard person={peopleData[1]} />
        <SingleCard person={peopleData[2]} />
      </Grid>
      <Grid container spacing={10} justify="center">
        <SingleCard person={peopleData[0]} />
        <SingleCard person={peopleData[1]} />
        <SingleCard person={peopleData[2]} />
      </Grid>
    </div>
  )
  // <Grid container spacing={24}>
  //   <Card person={peopleData} />
  // </Grid>
}

export default Cards;