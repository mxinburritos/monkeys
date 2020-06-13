import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import {
  Chart,
  Upload,
  TitleCard,
  EnhancedTable,
  Dropdown,
  DataDropdown,
} from './components';
import styles from './App.module.css';
import PeopleData from './data/people.json';
import messageData from './data/message_16.json';
import swears from './data/swears.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      People: PeopleData.people,
      messageData,
      ChartDisplay: 'Message Frequency',
    };

    this.changeChart = this.changeChart.bind(this);
  }

  changeChart(chart) {
    this.setState({ ChartDisplay: chart });
  }

  render() {
    const { People, messageData, ChartDisplay } = this.state;
    return (
      <div className={styles.container}>
        <TitleCard />
        <DataDropdown />
        <EnhancedTable users={messageData} swears={swears} />
        <Dropdown changeChart={this.changeChart} />
        <Chart users={messageData} chart={ChartDisplay} swears={swears} />
      </div>
    );
  }
}

export default App;
