import React, { Component } from 'react';
import TopicsList from '../../components/TopicsList';
import {connect} from 'react-redux';
import BubblesLayout from '../../containers/BubblesLayout';


class Home extends Component{
  componentDidMount(){
      fetch('http://localhost:8080/categories')
      .then(parseJSON => parseJSON.json())
      .then(data => {
      // console.log('in da componentDidMount' ,data);
        this.props.dispatch({
          type: 'GETCATEGORIES',
          categories: data,
        })
      });
      // console.log(this.props);
  }

  render(){
    return(
      <div>
        <TopicsList/>
        <BubblesLayout/>
      </div>
    );
  }
}

export default connect()(Home);
