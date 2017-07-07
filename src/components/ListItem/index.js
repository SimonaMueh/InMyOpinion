import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class ListItem extends Component{
  render(){
    const {topic} = this.props;
    return(
      <div style={{marginBottom: 10}}>
        <li>
          <Link to={'/topics/'+topic.id}>{topic.text}</Link>
        </li>
      </div>

    );
  }
}



  export default ListItem;
