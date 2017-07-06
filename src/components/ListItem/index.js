import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class ListItem extends Component{
  render(){
    return(
      <div style={{marginBottom: 10}}>
        <li> {this.props.topic} </li>
      </div>

    );
  }
}



  export default ListItem;
