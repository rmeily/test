import React from 'react'

import { NavLink } from 'react-router-dom';
import image from '../../assets/images/pl.jpg';

function AppHeader() {
  return (
    <div className='container'>
      
      {/* header */}
      <div className='header'>
        <div className='ant-page-header-heading'>
          <img width={32} src={image} alt='banner-logo' />

          <span class='ant-page-header-heading-title' title='PLearning'>PLearning</span> 
          </div> 
 
        <nav>
          <ul>
            {/*<li><NavLink to='/'>Home</NavLink></li>*/}
            <li><NavLink to='/about'>About</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default AppHeader