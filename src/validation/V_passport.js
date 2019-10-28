import React from 'react';

const Valid_text = ( props ) => {
    let {val, good, not, If, Null,} = props
    let text = good || "Text long enough"
     let boxStyle = "Valid_box_good"
    // let textStyle = "Valid_text_good"
    if (val.length == 0){
        text = Null || "Add a text" ;

    }else if ( If ) {

         text = not || "Text too short";
        boxStyle = "Valid_box_not_good";
        // textStyle = "Valid_text_not_good";
    };

    return(<div className = {boxStyle}>
        <p className = {"Valid_text_good"}>{text}</p>
    </div>);

};



export default Valid_text
