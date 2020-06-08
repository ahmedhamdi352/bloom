import React, { Component } from 'react';
import  './style.css'
 import {LikeOutlined , DislikeOutlined } from '@ant-design/icons'
class Confirm extends Component {

  render() {
  
    return (

     <div className='container'>
         <div className='text-container'>
            <p>Is this a retail site?</p>
         </div>

         <div className='icon-container'>
             <button className='icon-content'>
             <LikeOutlined />
             </button>
             <button className='icon-content'>
              <DislikeOutlined />
              </button>
         </div>
     </div>



    );
  }
}

export default Confirm ;
