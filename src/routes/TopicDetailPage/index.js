import React, {Component} from 'react';
import {connect} from 'react-redux';



class TopicDetailPage extends Component {

  render(){
    const {topic} = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>{topic.text}</h1>
        <button>Yes</button>
        <button>No</button>
      </div>
    );
  }
}


const mapStateToProps = (state, props) =>{
    const id = props.match.params.id;
    console.log("detailpage: ", state.topicReducer);
    const myTopic = state.topicReducer.filter((topic) => topic.id == id)
      // console.log("in da my topic ", topic, id);
      // console.log(typeof topic.id);
      //console.log("detailpage my topic", myTopic);
    return{
      topic: myTopic[0],
    }

}

export default connect(mapStateToProps)(TopicDetailPage);
