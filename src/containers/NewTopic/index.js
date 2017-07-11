import React, {Component} from 'react';
import SelectCategory from '../../components/CategorySelectField';
import SelectTextFragment from '../../components/FragmentSelectField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class NewTopic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      category: null
    };
  }

handleCreateNewTopicClick = () => {console.log("hello new topic");}

  render() {
    return (
      <div>
        <SelectTextFragment/>
        <TextField hintText={"Enter your topic here..."}/>
        <SelectCategory/>
        <RaisedButton label="create new topic" onTouchTap = {this.handleCreateNewTopicClick}/>
      </div>
    );
  }
}

export default NewTopic;
