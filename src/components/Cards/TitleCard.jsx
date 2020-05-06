import React from 'react';
import { Card, CardTitle, CardContent, Typography } from '@material-ui/core';
import styles from './TitleCard.module.css'

const TitleCard = () => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h2">Group Chat of Monkeys</Typography>
      </CardContent>
    </Card>
  )
}

export default TitleCard;