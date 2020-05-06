import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { Cards, Chart, Upload, TitleCard } from './components';
import styles from './App.module.css';
import PeopleData from './data/people.json'
class App extends Component {

  state = {
    People: PeopleData.people,
  }

  render() {
    return (
      <div className={styles.container}>
        <TitleCard />
        <Cards people={this.state.People} />
        <Chart />
      </div>
    );
  }

}

export default App;