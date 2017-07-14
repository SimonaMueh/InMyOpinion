import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';




class SelectCategory extends Component {

  //fetch categories again here

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  };


  handleChange = (event, index, value) => {
    this.props.selectCategory(value);
    this.setState({value: value})
  }

    render() {
      console.log('in da SelectField',this.props.categories);
      return (
        <div>
            <SelectField
              floatingLabelText="Select Category"
              floatingLabelStyle={{color: 'white'}}
              value={this.state.value}
              onChange={this.handleChange}
              autoWidth={true}
            >
              {
                this.props.categories.map((category) => {
                  return <MenuItem key={category.id} value={category.id} primaryText={category.text}/>
                })
              }
            </SelectField>
        </div>
      );
    }
  }



const mapStateToProps = (state) => ({
  categories: Object.values(state.categoryReducer),
});

export default connect(mapStateToProps)(SelectCategory);


//   render() {
//     console.log('in da SelectField',this.props.categories);
//     return (
//       <div>
//           <SelectField
//             floatingLabelText="Select Category"
//             floatingLabelStyle={{color: 'white'}}
//             value={this.state.value}
//             onChange={this.handleChange}
//             autoWidth={true}
//           >
//             {
//               this.props.categories.map((category) => {
//                 return <MenuItem key={category.id} value={category.id} primaryText={category.text}/>
//               })
//             }
//           </SelectField>
//       </div>
//     );
//   }
// }
