import React from 'react';
import messageCounter from '../../helpers/JSONProcessing';
import { Line, Bar } from 'react-chartjs-2';

const generateNameLabels = data => {
  const participants = data.participants.map(person => person.name);
  return participants;
};

Date.prototype.addDays = function (days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

Date.prototype.toShortFormat = function () {
  let monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let day = this.getDate();

  let monthIndex = this.getMonth();
  let monthName = monthNames[monthIndex];

  let year = this.getFullYear();

  return `${monthName} ${day}, ${year}`;
};

const diff_months = (dt1, dt2) => {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7 * 4;
  return Math.abs(Math.round(diff));
};

const generateDateRange = data => {
  let dt1 = new Date(data.messages[data.messages.length - 1].timestamp_ms);
  let dt2 = new Date(data.messages[0].timestamp_ms);
  let dates = [];
  let newdt = dt1;
  let monthDiff = diff_months(dt1, dt2);
  console.log(monthDiff);

  const diffDays = Math.ceil((dt2 - dt1) / (1000 * 60 * 60 * 24));
  for (let i = 0; i < diffDays; i += diffDays / 10) {
    newdt = newdt.addDays(diffDays / 10);
    dates.push(newdt);
  }
  return dates;
};

const generateDateLabels = data => {
  return generateDateRange(data).map(datum => datum.toShortFormat());
};

const renderFrequencyData = (data, user) => {
  const count = {};
  const countArr = [];
  const dates = generateDateRange(data).map(date => date.getTime());
  dates.forEach(date => {
    count[date] = 0;
  });
  data.messages.forEach(message => {
    if (message.sender_name === user) {
      let currDate = message.timestamp_ms;
      let closest = dates.reduce(function (prev, curr) {
        return Math.abs(curr - currDate) < Math.abs(prev - currDate)
          ? curr
          : prev;
      });
      count[closest] += 1;
    }
  });
  Object.entries(count).forEach(([key, value]) => countArr.push(value));
  return countArr;
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
  const numOfParticipants = userData.participants.length;
  const data = {
    labels: generateDateLabels(userData),
    datasets: userData.participants.map((participant, index) => {
      return {
        label: participant.name,
        fill: 'false',
        backgroundColor: `rgba(${90 - index * (90 / numOfParticipants)},${
          150 - index * (150 / numOfParticipants)
        },${243 - index * (243 / numOfParticipants)},0.8)`,
        borderColor: `rgba(${90 - index * (90 / numOfParticipants)},${
          150 - index * (150 / numOfParticipants)
        },${243 - index * (243 / numOfParticipants)},1)`,
        borderWidth: 1,
        hoverBackgroundColor: `rgba(${90 - index * (90 / numOfParticipants)},${
          150 - index * (150 / numOfParticipants)
        },${243 - index * (243 / numOfParticipants)},1)`,
        hoverBorderColor: `rgba(${90 - index * (90 / numOfParticipants)},${
          150 - index * (150 / numOfParticipants)
        },${243 - index * (243 / numOfParticipants)},1)`,
        data: renderFrequencyData(userData, participant.name),
      };
    }),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    legend: { display: true },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'rgba(166,166,166,0.5)',
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: 'rgba(166,166,166,0.5)',
          },
        },
      ],
    },
  };

  return <Line data={data} height={400} width={600} options={options} />;
};

const barChart = (userData, type, swears) => {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'rgba(166,166,166,0.5)',
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: 'rgba(166,166,166,0.5)',
          },
        },
      ],
    },
  };
  const data = {
    labels: generateNameLabels(userData),
    datasets: [
      {
        label: 'Number of Messages',
        backgroundColor: 'rgba(30,150,243,0.8)',
        borderColor: 'rgba(30,150,243,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(30,150,243,1)',
        hoverBorderColor: 'rgba(30,150,243,1)',
        data: renderData(userData, type, swears),
      },
    ],
  };
  return <Bar data={data} height={400} width={600} options={options} />;
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
