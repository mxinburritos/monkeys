import React from 'react';
import messageCounter from '../../helpers/JSONProcessing';
import { Line, Bar } from 'react-chartjs-2';

const generateNameLabels = data => {
  const participants = data.participants.map(person => person.name);
  return participants;
};

const renderData = (data, type, swears) => {
  if (type === 'N-Word Count') {
    return countNWord(data, swears);
  } else if (type === 'Swear Word Count') {
    return countSwearWord(data, swears);
  } else if (type === 'Message Count') {
    return countMessages(data);
  }
};

const countMessages = data => {
  const count = {};
  const countArr = [];
  generateNameLabels(data).forEach(name => {
    count[name] = 0;
  });
  data.messages.forEach(message => {
    count[message.sender_name] += 1;
  });
  Object.entries(count).forEach(([key, value]) => countArr.push(value));
  return countArr;
};

const countNWord = (data, swears) => {
  const count = {};
  const countArr = [];
  generateNameLabels(data).forEach(name => {
    count[name] = 0;
  });
  data.messages.forEach(message => {
    if ('content' in message) {
      message.content.split(' ').forEach(word => {
        if (word.toLowerCase() in swears.NWords) {
          count[message.sender_name] += 1;
        }
      });
    }
  });
  Object.entries(count).forEach(([key, value]) => countArr.push(value));
  return countArr;
};

const countSwearWord = (data, swears) => {
  const count = {};
  const countArr = [];
  generateNameLabels(data).forEach(name => {
    count[name] = 0;
  });
  data.messages.forEach(message => {
    if ('content' in message) {
      message.content.split(' ').forEach(word => {
        if (word.toLowerCase() in swears.swear_words) {
          count[message.sender_name] += 1;
        }
      });
    }
  });
  Object.entries(count).forEach(([key, value]) => countArr.push(value));
  return countArr;
};

const lineChart = userData => {
  const data = {
    labels: generateNameLabels(userData),
    datasets: [
      {
        label: 'Number of Messages',
        fill: 'false',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: countMessages(userData),
      },
    ],
  };
  return <Line data={data} options={{ maintainAspectRatio: false }} />;
};

const barChart = (userData, type, swears) => {
  const data = {
    labels: generateNameLabels(userData),
    datasets: [
      {
        label: 'Number of Messages',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: renderData(userData, type, swears),
      },
    ],
  };
  return <Bar data={data} options={{ maintainAspectRatio: false }} />;
};

const Chart = props => {
  return (
    <div>
      <h2>{props.users.title}</h2>
      {props.chart === 'Message Frequency'
        ? lineChart(props.users)
        : barChart(props.users, props.chart, props.swears)}
    </div>
  );
};

export default Chart;
