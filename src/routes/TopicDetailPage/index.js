import React, {Component} from 'react';
import {connect} from 'react-redux';


const postVote = (id, selection) => {
  var myHeaders = new Headers({'Content-Type': 'application/json'});
  var myBody = { "selection": selection};
  var myInit = {
           method: 'POST',
           headers: myHeaders,
           body: JSON.stringify(myBody)
         }

  return fetch('http://localhost:8080/topics/' + id + '/vote', myInit)
    .then(parseJSON => parseJSON.json())
    .then(data => {
      console.log("data ", data);
    });
}


class TopicDetailPage extends Component {
  handleYesClick = () => {
    postVote(this.props.topic.id, true)
      .then(() => this.props.history.push('/topics/'+this.props.topic.id+'/result'));

  }

  handleNoClick = () => {
    postVote(this.props.topic.id, false)
      .then(() => this.props.history.push('/topics/'+this.props.topic.id+'/result'));
  }

  render(){
    const {topic} = this.props;
    return (
      <div>
        <h1>{topic.text}</h1>
        <button value={true} onTouchTap = {this.handleYesClick}>
          Yes
        </button>
        <button value={false} onTouchTap = {this.handleNoClick}
          >No</button>
      </div>
    );
  }
}


const mapStateToProps = (state, props) =>{
    const id = props.match.params.id;
    const myTopic = state.topicReducer.filter((topic) => topic.id == id)
    return{
      topic: myTopic[0],
    }

}

export default connect(mapStateToProps)(TopicDetailPage);
