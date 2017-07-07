import React, {Component} from 'react';
import {connect} from 'react-redux';





class TopicsResultPage extends Component {

  render(){
    console.log(this.props);

    return(
      <div>
        <ul>
        hello
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

export default connect(mapStateToProps)(TopicsResultPage);
