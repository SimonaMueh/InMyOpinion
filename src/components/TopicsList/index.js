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
         {this.props.topics.map((topic) => {
            return  <ListItem key={topic.id} topic={topic}/>
           })
         }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    topics: state.topicReducer
  })
}

export default connect(mapStateToProps)(TopicsList);




// <ul className="TopicsList_List">
//  {this.props.topics.map((topic) => {
//     return  <ListItem key={topic.id} topic={topic}/>
//    })
//  }
// </ul>
