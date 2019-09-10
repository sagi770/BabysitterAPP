import React from 'react';
import TimePicker from 'react-times';
 
// use material theme
import 'react-times/css/material/default.css';
// or you can use classic theme
import 'react-times/css/classic/default.css';
 
export default class SomeComponent extends React.Component {
  onTimeChange(options) {
    // do something
  }
  
  onFocusChange(focusStatue) {
    // do something
  }
 
  render() {
      return <TimePicker
      onFocusChange={this.onFocusChange.bind(this)}
      onTimeChange={this.onTimeChange.bind(this)}
    />
  }
}