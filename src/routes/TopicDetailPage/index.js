import React, {Component} from 'react';
import {connect} from 'react-redux';


class TopicDetailPage extends Component {

  postVote = (id, selection) => {
    var myHeaders = new Headers({'Content-Type': 'application/json'});
    var myBody = { "selection": selection};
    var myInit = {
             method: 'POST',
             headers: myHeaders,
             body: JSON.stringify(myBody)
           }

    return fetch('http://localhost:8080/topics/' + id + '/vote', myInit)
      .then(parseJSON => parseJSON.json())
      .then(data => { console.log('in da postVote!!!', data);
        this.props.dispatch({
          type: 'VOTEFORTOPIC',
          topicID: id,
          voteSelection: selection,
        })
      });
  }

  handleYesClick = () => {
    this.postVote(this.props.topic.id, true)
      .then(() => this.props.history.push('/topics/'+this.props.topic.id+'/result'));

  }

  handleNoClick = () => {
    this.postVote(this.props.topic.id, false)
      .then(() => this.props.history.push('/topics/'+this.props.topic.id+'/result'));
  }

  render(){
    const {topic} = this.props;
    console.log(topic);
    return (
      <div>
      <div className="TopicDetailPage_Container">
        <div>
        <h1 className="TopicDetailPage_Header">{topic.text}</h1>
        </div>
      </div>
      <div className="buttons">
        <button value={true} onTouchTap = {this.handleYesClick}>
          Yes
        </button>
        <button value={false} onTouchTap = {this.handleNoClick}>
          No
        </button>
      </div>
      </div>
    );
  }
}


const mapStateToProps = (state, props) =>{
  console.log('indaMapStateToProps1', state);
    const id = props.match.params.id;
    const myTopic = state.topicReducer.filter((topic) => topic.id == id)
    return{
      topic: myTopic[0],
    }

}

export default connect(mapStateToProps)(TopicDetailPage);
