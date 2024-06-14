import React from 'react'
import { Image } from 'antd';


function FooterWidget() {
  return (
    <div className='footerWidget'>
      <div className='consider'>
            <Image
             width={50}
            src="https://market.toflyn.com/pl.jpg"
            />

            {/*<img width={50} src={image} alt='banner-logo' />*/}
            <span class='ant-page-footer-title' title='PLearning'>PLearning</span>
            
      </div>
      <div class="ant-col ant-col-24">
            <span>เเหล่งรวมร้านขายชองเล่น ทั้งมือหนึ่ง เเละมือสอง ที่มากที่สุดในประเทศ</span>
      </div>
        

    </div>
  )
}

export default FooterWidget;