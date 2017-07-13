import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as d3 from "d3";
import '../../style.css';



class ListItem extends Component{
  handleCircleClick = ()=> {
    console.log('hello Click');

  }
  render(){


    const {topic} = this.props;
    return(
      <svg height={200} width={200}>
        <g>
         <circle className='circle' cx="50%" cy="50%" r={100} fill={'peachpuff'} onTouchTap={this.handleCircleClick}>
         </circle>
         <text x="50%" y="50%" text-anchor="middle"  dy=".3em">
           {topic.text}
         </text>
       </g>
      </svg>
    );
  }
}



  export default ListItem;

  //
  // class ListItem extends Component{
  //   handleCircleClick = ()=> {
  //     console.log('hello Click');
  //   }
  //   render(){
  //
  //
  //     const {topic} = this.props;
  //     return(
  //       <svg height={200} width={200}>
  //         <g>
  //          <circle cx="50%" cy="50%" r={100} fill={'peachpuff'} onTouchTap={this.handleCircleClick}>
  //          </circle>
  //          <text x="50%" y="50%" text-anchor="middle"  dy=".3em">
  //            {topic.text}
  //          </text>
  //        </g>
  //       </svg>
  //     );
  //   }
  // }
  //
  //
  //
  //   export default ListItem;
// original
  // <div style={{marginBottom: 10}}>
  //     <Link to={'/topics/'+topic.id}>{topic.text}</Link>
  // </div>

//  instead of text only <Link to=</Link>

// div version Working with text centered in css

//<div className='circle' onTouchTap={this.handleCircleClick}>{topic.text}</div>
