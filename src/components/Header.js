import React from 'react';
import { Link } from 'react-router-dom';





const Header = ({imgRight, imgLeft, text, right, left}) => {
    text = text || "title"
    const leftImg = img=>{if(img){
      return<Link to={left} >
        <img className="imgTitle" src={img} alt="" />
      </Link>
    }else{
      return <div className="imgTitle" ></div>
    }
    }
    const rightImg = img=>{if(img){
      return<Link to={right} >
        <img className="imgTitle" src={img} alt="" />
      </Link>
    }else{
      return <div className="imgTitle" ></div>
    }
    }





  return <div className="header">
           {leftImg(imgLeft)}
           <div className="header_title">
           <h1 >{text}</h1>
           </div>
           {rightImg(imgRight)}
    </div>
}

export default Header;