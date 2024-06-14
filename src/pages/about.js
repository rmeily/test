import React from 'react'
import { Image } from 'antd';


function AppAbout() {
  return (
    <div className='about'>
        <div className='consider'>
        <Image
          width={100}
          src="https://market.toflyn.com/pl.jpg"
        />
        <span class="aboutTitle">เกี่ยวกับเรา</span>
      </div>
      <div className='aboutDetail'>
        <div className='aboutDetail-title'>
          <h3>PLearning is xxxx xxxx xxxx xxxx xxxx</h3>
        </div>
        <div className='aboutDetail-descrip'>
          <span>
          Detail xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx<br />
          xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx<br />
          <br />xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx
            <br /><br /> Tel. 09X-XXX-XXXX  <br />Email xxxx@plxxx.com<br />
          </span>
        </div>
      
      </div>
    </div>
  )
}

export default AppAbout;