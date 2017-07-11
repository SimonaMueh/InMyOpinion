import React, { Component } from 'react';
import TopicsList from '../../components/TopicsList';
import {connect} from 'react-redux';
import VisExample3 from '../../components/Bubbles'
import ReactDOM from 'react-dom';
import * as d3 from "d3";


class Home extends Component{
  componentDidMount(){
      fetch('http://localhost:8080/categories')
      .then(parseJSON => parseJSON.json())
      .then(data => {
      // console.log('in da componentDidMount' ,data);
        this.props.dispatch({
          type: 'GETCATEGORIES',
          categories: data,
        })
      });
      // console.log(this.props);
  }

  render(){
    return(
      <div>
        <TopicsList/>
      </div>
    );
  }
}

export default connect()(Home);




// const Home = React.createClass({
//   getInitialState() {
//     // make up some data
//     const data = [];
//     const numRows = 30;
//     const numCols = 50;
//     const freqRng = d3.randomNormal(15, 15);
//     const accRng = d3.randomNormal(0.45, 0.1);
//     const rankRng = () => Math.ceil(Math.random() * 300);
//
//     for (let x = 0; x < numCols; x++) {
//       for (let y = 0; y < numRows; y++) {
//         const freq = freqRng();
//         data.push({ locationX: x, locationY: y, frequency: freq < 0 ? 0 : freq, accuracy: accRng(), rank: rankRng() });
//       }
//     }
//
//     return {
//       data: data
//     };
//   },
//
//   // render the line chart and radial heatmap
//   render() {
//     const { data } = this.state;
//
//     return (
//         <div className='example'>
//           <h4>Example 3 - External Data Points</h4>
//           <VisExample3 width={400} height={200} data={data} />
//           <TopicsList></TopicsList>
//       </div>
//     );
//   }
// });
