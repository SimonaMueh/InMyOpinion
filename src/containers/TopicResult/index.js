import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProgressBar from '../../components/ProgressBar';

class TopicResult extends Component {

  componentDidMount() {
    fetch('http://localhost:8080/topics')
    .then(parseJSON => parseJSON.json())
    .then(data => {
      this.props.dispatch
      ({
        type: 'GETTOPICS',
        topics: data
      })
    });
  }

  render() {
    const topic = this.props.topics[this.props.paramsId - 1];
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
