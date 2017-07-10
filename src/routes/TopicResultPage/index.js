import React, {Component} from 'react';
import {connect} from 'react-redux';
import TopicResult from '../../containers/TopicResult';

class TopicsResultPage extends Component {

  render(){

    return(
      <div>
      <TopicResult paramsId = {this.props.match.params.id}/>
      </div>
    );
  }
}

export default connect()(TopicsResultPage);
