import React, {Component} from 'react';
import SelectCategory from '../../components/CategorySelectField';
import SelectTextFragment from '../../components/FragmentSelectField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {withRouter} from 'react-router-dom';


const postTopic = (fragment, text, category) => {
  var myHeaders = new Headers({'Content-Type': 'application/json'});
  var myBody = {
    "text": fragment + " " + text,
    "category": category
  };
  var myInit = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(myBody)
  }

  return fetch('http://localhost:8080/categories/' + myBody.category + '/topic', myInit)
  .then(parseJSON => parseJSON.json()).then(data => {
  });

}

console.log('in da NewTopic', this.state);

class NewTopic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fragment: "",
      text: "",
      category: null
    };
  }


handleCreateNewTopicClick = () => {
  postTopic(this.state.fragment, this.state.text, this.state.category)
    .then(() => this.props.history.push('/createNew/ready' ));

}

handleTextFragment = (fragment) => {
  this.setState({fragment: fragment})
}

handleFieldInput = (event ,input) => {
  this.setState({text: input})
}

handleCategory = (category) => {
  this.setState({category: category})
}


  render() {
    console.log('in da NewTopic', this.state);
    return (
      <div>
        <SelectTextFragment setFragment={this.handleTextFragment}/>
        <TextField hintText={"Enter your topic here..."} onChange={this.handleFieldInput}/>
        <SelectCategory selectCategory={this.handleCategory}/>
        <RaisedButton label="create new topic" onTouchTap = {this.handleCreateNewTopicClick} />
      </div>
    );
  }
}

export default withRouter(NewTopic);
