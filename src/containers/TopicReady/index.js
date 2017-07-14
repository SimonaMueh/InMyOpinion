import React, { Component } from 'react';
import {connect} from 'react-redux';

class TopicReady extends Component {

  render() {
    console.log(this.props.lastTopic);
    return (
      <div className="topicReadyContainer">
        <div className="topicReadyYourTopic">
           Your topic:
        </div>
        <div className="topicReadyTopicText">
           {this.props.lastTopic.text}
        </div>
        <div className="topicReadyCreated">
           has been created! <br></br>
        </div>
        <div className="topicReadySaveToken">
          Please save your token for later editing:
        </div>
        <div className="topicReadyToken">
          {this.props.lastTopic.token}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return{
      lastTopic: state.topicReducer[state.topicReducer.length -1]
    }
}


export default connect(mapStateToProps) (TopicReady);
