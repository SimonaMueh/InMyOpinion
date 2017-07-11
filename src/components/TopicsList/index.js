import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListItem from '../ListItem';
import '../../style.css';





class TopicsList extends Component {
  componentDidMount(){
      fetch('http://localhost:8080/topics')
      .then(parseJSON => parseJSON.json())
      .then(data => {
      // console.log('in da componentDidMount' ,data);
        this.props.dispatch({
        type: 'GETTOPICS',
        topics: data,
        })
      });
  }

  render(){
    return(
      <div>
        <ul className="TopicsList_List">
         {this.props.topics.map((topic) => {
            return <ListItem key={topic.id} topic={topic}/>
           })
         }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    topics: state.topicReducer
  })
  console.log('in da mapStateToProps', state);
}

export default connect(mapStateToProps)(TopicsList);
