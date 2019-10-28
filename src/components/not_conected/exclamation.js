import React from 'react';
import example from '../../images/example.png'
import { Link } from 'react-router-dom';
import Header from '../Header';
import key from '../../images/icons/key.png'
import add_user from '../../images/icons/add_user.png'

const Exclamation = () => {
  
    return(<div>

        <h2 className = "mainImgs">example</h2>
        <p className = "mainImgs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>

        <img className = "mainImgs" src = { example } alt = '' />

        <h2 className = "mainImgs">example</h2>

        <p className = "mainImgs">Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. </p>
      
        <img className = "mainImgs" src = { example } alt = '' />
   


    </div>);
}

export default Exclamation;