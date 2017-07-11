import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';




class SelectTextFragment extends Component {

  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
          <SelectField
            floatingLabelText="Select text fragment"
            value={this.state.value}
            onChange={this.handleChange}
            autoWidth={true}
          >
            <MenuItem value={0} primaryText={"I like"}/>
            <MenuItem value={1} primaryText={"I want to"}/>
            <MenuItem value={2} primaryText={"I love"}/>
          </SelectField>
      </div>
    );
  }
}



export default SelectTextFragment;
