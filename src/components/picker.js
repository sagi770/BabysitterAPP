import React, {Component} from 'react';
import Picker from 'react-scrollable-picker';
 
class MyPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        year: '2038',
        firstName: 'Micheal',
        secondName: '3'
      }, 
      optionGroups: {
        title: [
          { value: '2017', label: '2019.' },
          { value: '2018', label: '2019.' },
          { value: '2019', label: '2019.' },
          { value: '2020', label: '2019.' },
          { value: '2021', label: '2019.' },
          { value: '2022', label: '2019.' },
          { value: '2023', label: '2019.' },
          { value: '2024', label: '2019.' },
          { value: '2025', label: '2019.' },
          { value: '2026', label: '2019.' },
          { value: '2027', label: '2019.' },
          { value: '2028', label: '2019.' },
          { value: '2029', label: '2019.' },
          { value: '2030', label: '2019.' },
          { value: '2031', label: '2019.' },
         
        ],
        firstName: [
          { value: 'John', label: 'John' },
          { value: 'Micheal', label: 'Micheal' },
          { value: 'Elizabeth', label: 'Elizabeth' },
        ],
        secondName: [
          { value: 'Lennon', label: 'Lennon' },
          { value: 'Jackson', label: 'Jackson' },
          { value: 'Jordan', label: 'Jordan' },
          { value: 'Legend', label: 'Legend' },
          { value: 'Taylor', label: 'Taylor' }
        ],
      },
    };
  }
 
  componentDidMount(){
      this.optionGroups()
  }
  
  // Update the value in response to user picking event
  handleChange = (name, value) => {
    this.setState(({valueGroups}) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));
  };
  optionGroups(){
      let year = [], 
    month = [],
    date = []
      for (let i = 2000; i <= 2050; i++){
        year.push({value: i.toString(), label: i.toString()})
      }
      for (let i = 1; i <= 12; i++){
        month.push({value: i.toString(), label: i.toString()})
      }
      for (let i = 1; i <= 31; i++){
        date.push({value: i.toString(), label: i.toString()})
      }

console.log(Date())
console.log()
      
      this.setState({ optionGroups: {
        year ,
        month, 
        date,
        
      },})
     let d = new Date();
     this.setState({valueGroups:{
         year:  d.getFullYear().toString(),
         month: (d.getMonth() + 1).toString(),
         date: d.getDate().toString()
     }})
     d.getFullYear()
     console.log( d.getFullYear().toString())

  }
  render() {
    const {optionGroups, valueGroups} = this.state;
 
    return (
      <Picker
        optionGroups={optionGroups}
        valueGroups={valueGroups}
        onChange={this.handleChange} />
    );
  }
}
export default MyPicker