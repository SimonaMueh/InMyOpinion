import React, {Component} from 'react';
import {connect} from 'react-redux';





class TopicsResultPage extends Component {
  componentDidMount(){
      fetch('http://localhost:8080/topics')
      .then(parseJSON => parseJSON.json())
      .then(data => {
      // console.log('in da componentDidMount' ,data);
        this.props.dispatch({
        type: 'GETTOPICS',
        topics: data,
        })
      });
  }



  render(){
    console.log("resultPage",this.props);

    return(
      <div>
        <ul>
        hello
        </ul>
      </div>
    );
  }
}

// calculate the number of votes in a function with the this.props.topics
const mapStateToProps = (state) => {
  return({
    topics: state.topicReducer
  })
  console.log('in da mapStateToProps', state);
}

export default connect(mapStateToProps)(TopicsResultPage);
