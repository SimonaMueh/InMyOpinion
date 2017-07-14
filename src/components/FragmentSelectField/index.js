import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';




class SelectTextFragment extends Component {

  state = {
    value: null,
  };

  // handleChange = (event, index, value) => this.setState({event, index, value});
  handleChange = (event, index, value) => {
    this.props.setFragment(value);
    this.setState({value: value})
  }

  render() {

    return (
      <div>
          <SelectField
            floatingLabelText="Select text fragment"
            floatingLabelStyle={{color: 'white'}}
            inpuStyle={{color: 'white'}}
            value={this.state.value}
            onChange={this.handleChange}
            autoWidth={true}
          >
            <MenuItem value={"I like"} primaryText={"I like"} />
            <MenuItem value={"I want to"} primaryText={"I want to"}/>
            <MenuItem value={"I love"} primaryText={"I love"}/>
          </SelectField>
      </div>
    );
  }
}



export default SelectTextFragment;
