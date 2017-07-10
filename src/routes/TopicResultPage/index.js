import React, {Component} from 'react';
import {connect} from 'react-redux';





class TopicsResultPage extends Component {
  // postVote(id, selection){
  //
  //   // dispatch an action to update redux state
  //   // button yes no variable
  //   var myHeaders = new Headers({'Content-Type': 'application/json'});
  //   var myBody = { "selection": false };
  //   var myInit = {
  //            method: 'POST',
  //            headers: myHeaders,
  //            body: JSON.stringify(myBody)
  //          }
  //
  //     fetch('http://localhost:8080/topics/' + this.props.match.params.id + '/vote', myInit)
  //     .then(parseJSON => parseJSON.json())
  //     .then(data => {
  //       console.log("data ", data);
  //     });
  //
  //     // now dispatch an action
  // }


  componentDidMount(){
      fetch('http://localhost:8080/topics')
      .then(parseJSON => parseJSON.json())
      .then(data => {
        this.props.dispatch({
        type: 'GETTOPICS',
        topics: data,
        })
      });
  }



  render(){
    const topic = this.props.topics[this.props.match.params.id-1]
    console.log("resultPage", topic);
    const total = topic.votes.length;

    let voteTrue = 0;
    const countTrue = topic.votes.filter((vote) => {
      if(vote.selection === true){
        voteTrue++;
      }
      return voteTrue;
    });

    let voteFalse = 0;
    const countFalse = topic.votes.filter((vote) => {
      if(vote.selection === false){
        voteFalse++;
      }
      return voteFalse;
    });

    return(
      <div>
        <ul>
          total: {total} <br></br>
          yes: {voteTrue}<br></br>
          no: {voteFalse}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    topics: state.topicReducer
  })
}

export default connect(mapStateToProps)(TopicsResultPage);
