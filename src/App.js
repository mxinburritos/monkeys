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
import messageData from './data/message_sample.json';
import swears from './data/swears.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageData,
      ChartDisplay: 'Message Frequency',
    };

    this.changeChart = this.changeChart.bind(this);
  }

  changeChart(chart) {
    this.setState({ ChartDisplay: chart });
  }

  render() {
    const { messageData, ChartDisplay } = this.state;
    return (
      <div className={styles.container}>
        <TitleCard />
        <DataDropdown />
        <EnhancedTable users={messageData} swears={swears} />
        <Dropdown changeChart={this.changeChart} />
        <Chart users={messageData} chart={ChartDisplay} swears={swears} />
        <br />
      </div>
    );
  }
}

export default App;
