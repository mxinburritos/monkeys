import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import {
  Chart,
  TitleCard,
  EnhancedTable,
  Dropdown,
  Upload,
} from './components';
import styles from './App.module.css';
import message1 from './data/message_sample.json';
import swears from './data/swears.json';

class App extends Component {
  constructor(props) {
    super(props);
    const initArray = [message1];
    this.state = {
      messages: initArray,
      messageData: message1,
      ChartDisplay: 'Message Frequency',
    };

    this.changeChart = this.changeChart.bind(this);
    this.changeData = this.changeData.bind(this);
    this.render = this.render.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(file) {
    let read = new FileReader();
    let data;
    read.readAsText(file);
    read.onloadend = () => {
      data = JSON.parse(read.result);
      this.setState({ messages: [...this.state.messages, data] });
    };
  }

  changeChart(chart) {
    this.setState({ ChartDisplay: chart });
  }

  changeData(name) {
    let message = this.state.messages.find(
      currMessage => currMessage.title === name
    );
    console.log(message);
    this.setState({ messageData: message });
  }

  render() {
    const { messages, messageData, ChartDisplay } = this.state;
    console.log(this.state);
    return (
      <div className={styles.container}>
        <TitleCard />
        <Upload
          messages={messages}
          handleChange={this.changeData}
          handleUpload={this.handleUpload}
        />
        <EnhancedTable users={messageData} swears={swears} />
        <Dropdown changeChart={this.changeChart} />
        <Chart users={messageData} chart={ChartDisplay} swears={swears} />
        <br />
      </div>
    );
  }
}

export default App;
