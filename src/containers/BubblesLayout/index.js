import React, { Component } from 'react';
import Bubbles from '../../components/Bubbles'
// import ReactDOM from 'react-dom';
// import * as d3 from "d3";
import {connect} from 'react-redux';
// import Chart from 'd3act';
import Chart from '../../components/Chart';
import '../../style.css';




// BubbleChart.getColor(){
//
// }



class BubblesLayout extends Component{

componentDidMount(){
    fetch('http://localhost:8080/topics')
    .then(parseJSON => parseJSON.json())
    .then(fetchedData => {
    // console.log('in da componentDidMount' ,data);
      this.props.dispatch({
      type: 'GETTOPICS',
      topics: fetchedData,
      })
    });
}


  render(){
    return(
      <div>
    {
      this.props.data.children.length > 0 &&
        <Chart
            type={"bubble"}
            diameter={800}
            showTooltips={true}
            data={this.props.data}
        />
      }
     </div>
    )
  }

}

const mapStateToProps = (state) => {

  const newTopicsArray = state.topicReducer.map((topic) => {
    const newTopicObject = {
      name: topic.text,
      value: topic.votes.length + 1,
      topicId: topic.id
    };
    return newTopicObject;
  })

  return({
    data: {children: newTopicsArray}
  })
}

export default connect(mapStateToProps)(BubblesLayout);


// data structure example
// class BubblesLayout extends Component{
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       data: {
//           children: [
//               { name: "John", value: 84 },
//               { name: "Alex", value: 11 },
//               { name: "Donald", value: 7 },
//           ]
//       }
//   }
// }
