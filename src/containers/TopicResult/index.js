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
    const fragment = this.props.topics[myId].fragment;

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

    // const negative = {
    //   "I love": "don't love",
    //   "I like": "don't like",
    //   "I want to": "don't want to"
    // }
    //
    // const positive = {
    //   "I love": "love",
    //   "I like": "like",
    //   "I want to": "want to"
    // }


    const getBiggerResult = () => {
      let result;
      if(topic.text.match(/^(I love)/)) {
        result =  voteTrue > voteFalse ? `${voteTrue} out of ${total} love ${topic.text.substring(6)}!` :
        `${voteFalse} out of ${total} do not love ${topic.text.substring(6)}!`
      }
      if(topic.text.match(/^(I like)/)) {
        result =  voteTrue > voteFalse ? `${voteTrue} out of ${total} like ${topic.text.substring(6)}!` :
        `${voteFalse} out of ${total} do not like ${topic.text.substring(6)}!`
      }
      if(topic.text.match(/^(I want to)/)) {
        result =  voteTrue > voteFalse ? `${voteTrue} out of ${total} want to ${topic.text.substring(9)}!` :
        `${voteFalse} out of ${total} do not want to ${topic.text.substring(9)}!`
      }

      return result;

    }

    return (
      <div>
        <div className="TopicResultContainer">
          <ProgressBar totalVotes={total} totalYes={voteTrue} totalNo={voteFalse}></ProgressBar>
        </div>
        <div className="TopicResultText">
          {getBiggerResult()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({topics: state.topicReducer})
}

export default connect(mapStateToProps)(TopicResult);


// return (
//   <div>
//     <div className="TopicResultContainer">
//       <ProgressBar totalVotes={total} totalYes={voteTrue} totalNo={voteFalse}></ProgressBar>
//     </div>
//     <div className="TopicResultText">
//       Total: {total}<br></br>
//       Yes: {voteTrue}<br></br>
//       No: {voteFalse}
//     </div>
//   </div>
// );
// }
// }
