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
        <div className="TopicResultContainer">
          <ProgressBar totalVotes={total} totalYes={voteTrue} totalNo={voteFalse}></ProgressBar>
        </div>
        <div className="TopicResultText">
          Total: {total}<br></br>
          Yes: {voteTrue}<br></br>
          No: {voteFalse}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({topics: state.topicReducer})
}

export default connect(mapStateToProps)(TopicResult);
