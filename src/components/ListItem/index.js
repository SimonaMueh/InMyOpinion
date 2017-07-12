import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';



class ListItem extends Component{
  handleCircleClick = ()=> {
    console.log('hello Click');
  }
  render(){


    const {topic} = this.props;
    return(
           <div className='circle' onTouchTap={this.handleCircleClick}>{topic.text}</div>
    );
  }
}



  export default ListItem;

  // <div style={{marginBottom: 10}}>
  //     <Link to={'/topics/'+topic.id}>{topic.text}</Link>
  // </div>

//  instead of text only <Link to={'/topics/'+topic.id}>{topic.text}</Link>

// <svg height={200} width={200}>
//   <g>
//    <circle cx="50%" cy="50%" r={100} fill={'red'}></circle>
//    <text text-anchor="middle" x="50%" y="50%"  dy=".3em">
//      {topic.text}
//    </text>
//  </g>
// </svg>

//<div className='circle' onTouchTap={this.handleCircleClick}>{topic.text}</div>
