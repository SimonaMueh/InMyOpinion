import React, {Component} from 'react';
import {connect} from 'react-redux';



class TopicDetailPage extends Component {



  handleYesClick = () => {
    this.props.history.push('/topics/'+this.props.topic.id+'/result');
  }

  handleNoClick = () => {
    this.props.history.push('/topics/'+this.props.topic.id+'/result');
  }

  render(){
    console.log("in da Detailpage", this.state);
    const {topic} = this.props;
    console.log("in da TopicDetailPage", this.props);
    return (
      <div>
        <h1>{topic.text}</h1>
        <button onClick = {this.handleYesClick}>
          Yes
        </button>
        <button onTouchTap = {this.handleNoClick}
          >No</button>
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
