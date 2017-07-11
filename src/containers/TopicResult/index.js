import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProgressBar from '../../components/ProgressBar';

class TopicResult extends Component {

  render() {
    let myId;
    for (var i = 0; i < this.props.topics.length; i++) {
      if (this.props.topics[i].id === parseInt(this.props.paramsId)) {
        myId=i;
      }
    }

    const topic = this.props.topics[myId];
    const total = topic.votes.length;

    let voteTrue = 0;
    const countTrue = topic.votes.filter((vote) => {
      if (vote.selection === true) {
        voteTrue++;
      }
      return voteTrue;
    });

    let voteFalse = 0;
    const countFalse = topic.votes.filter((vote) => {
      if (vote.selection === false) {
        voteFalse++;
      }
      return voteFalse;
    });
    return (
      <div>
       <ProgressBar totalVotes={total} totalYes={voteTrue} totalNo={voteFalse}></ProgressBar>
       total: {total}<br></br>
       yes: {voteTrue}<br></br>
       no: {voteFalse}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({topics: state.topicReducer})
}

export default connect(mapStateToProps)(TopicResult);
