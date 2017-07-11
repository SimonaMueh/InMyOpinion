import React, { Component } from 'react';
import TopicsList from '../../components/TopicsList';
import VisExample3 from '../../components/Bubbles'
import ReactDOM from 'react-dom';
import * as d3 from "d3";




// CSS via webpack
// require('normalize.css');
// require('../styles/main.css');

const Home = React.createClass({
  getInitialState() {
    // make up some data
    const data = [];
    const numRows = 30;
    const numCols = 50;
    const freqRng = d3.randomNormal(15, 15);
    const accRng = d3.randomNormal(0.45, 0.1);
    const rankRng = () => Math.ceil(Math.random() * 300);

    for (let x = 0; x < numCols; x++) {
      for (let y = 0; y < numRows; y++) {
        const freq = freqRng();
        data.push({ locationX: x, locationY: y, frequency: freq < 0 ? 0 : freq, accuracy: accRng(), rank: rankRng() });
      }
    }

    return {
      data: data
    };
  },

  // render the line chart and radial heatmap
  render() {
    const { data } = this.state;

    return (
        <div className='example'>
          <h4>Example 3 - External Data Points</h4>
          <VisExample3 width={400} height={200} data={data} />
          <TopicsList></TopicsList>
      </div>
    );
  }
});

export default Home;
