import React, { Component } from 'react';
import {connect} from 'react-redux';

class TopicReady extends Component {

  render() {
    console.log(this.props.lastTopic);
    return (
      <div>
      Your topic: {this.props.lastTopic.text} has been created!
      Please save your token for later editing:
      {this.props.lastTopic.token}
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
