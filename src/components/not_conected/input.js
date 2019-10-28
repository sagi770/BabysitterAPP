import React from 'react';
import Valid_text from '../../validation/V_passport';

const Input = (props) => {
    let {Default, value, Change, If, good, not, name, Null, type,} = props
  return<div>
<input type = {type} name={name} onChange = {event=>{ Change(event.target) }} value = { value } placeholder={Default} />
          <Valid_text
           val = {value}
           If = {If}
           good = {good}
           not = {not}
           Null = {Null}
           />
            <br/>
  </div> 
}

export default Input;



