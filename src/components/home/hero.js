import React from 'react'

import { NavLink } from 'react-router-dom';

import image1 from '../../assets/images/car.jpg';
import image2 from '../../assets/images/lego.jpg';
import image3 from '../../assets/images/house.jpg';
import image4 from '../../assets/images/bear.jpg';


import { Card } from 'antd';


const { Meta } = Card;

function Hero() {
  return (
    <div className='home-container'>
       
        <div className='content-title'>
        <h4>รายการร้านค้า</h4>
        </div>

        <div className='home-item'>
            
               <div className='store-item'>
               <NavLink to='/carstore'>
                    <Card
                    hoverable
                    style= {{width: '268px', textAlign: 'left' , fontSize:'13px', padding:'0', margin:'0'}}
                    cover={<img src={image1} alt="carstore" />}
                    >
                    <Meta title="ร้านขายของเล่นเด็ก" description="ของรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน" />
                    </Card>
                    </NavLink>
                    </div> 

                    <div className='store-item'>
                    <NavLink to='/legostore'>
                    <Card
                    hoverable
                    style={{width: '268px', textAlign: 'left' , fontSize:'13px', padding:'0', margin:'0'}}
                    cover={<img src={image2} alt="banner-lago" />}
                    >
                    <Meta title="ร้านขาย Lego" description="เรามี Lego ทุกชิ้นส่วน ของ rare หายาก มีขายที่นี่" />
                    </Card>
                    </NavLink>
                    </div>
                    
                    <div className='store-item'>
                    <NavLink to='/housestore'>
                    <Card
                    hoverable
                    style={{width: '268px', textAlign: 'left' , fontSize:'13px', padding:'0', margin:'0'}}
                    cover={<img src={image3} alt="banner-house" />}
                    >
                    <Meta title="ร้านขายบ้านของเล่น" description="เรามีทุกรูปเเบบของบ้าน เเละรับทำบ้าน ตัวอย่างตามความต้องการราคาเป็นกันเอง" />
                    </Card>
                    </NavLink>
                    </div>

                    <div className='store-item'>
                    <NavLink to='/bearstore'>
                    <Card
                    hoverable
                    style={{width: '268px', textAlign: 'left' , fontSize:'13px', padding:'0', margin:'0'}}
                    cover={<img src={image4} alt="banner-bear" />} 
                    >
                   <Meta title="ร้านขายตุ๊กตาหมี" description="เรามีทุกขนาด ทุกสี ขนนิ่ม ทำจากขนฝ้ายคุณภาพดี" />
                    </Card>
                    </NavLink>
                    </div>
                    
            
        </div>
    </div>
    
  )
}

export default Hero;