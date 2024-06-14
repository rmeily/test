import React from 'react'
import { Image } from 'antd';
import { Col, Row } from 'antd';

function Housestore() {
  return (
    <div className='carstore-container'>
          <div className='carstore-item'>
            <Row gutter={24} className='AntRowCarStore'>
              <Col className='ant-col-car-left ant-col-md-6'>
                <div className='ant-card'>
                  <div className='ant-card-cover'>
                    <div className='ant-row'> 
                      <div className='ant-col ant-col-24'>
                        <div className='ant-card-meta-detail'>
                        ร้านขายบ้านของเล่น
                        </div>
                        <div className='ant-card-meta-description'>
                        เรามีทุกรูปเเบบของบ้าน เเละรับทำบ้านตัวอย่าง ตามความต้องการ ราคาเป็นกันเอง
                        </div>
                      </div>
                      <div className='ant-card-body'> 
                        <Image width={240} src="https://market.toflyn.com/image/house.jpg" />
                      </div>
                    </div>
                  </div>  
                </div>
              </Col>
             
              <Col className='ant-col-car-right ant-col-md-18'>
                <div className='ant-card-right'>
                  <div className='ant-card-head'>
                    <div className='ant-card-head-wrapper'>
                      <div className='ant-card-head-title'>
                        ข้อมูลร้านค้า
                      </div>
                    </div>

                  </div>
                  <div className='ant-card-body'>
                    <p>xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx</p>
                  </div>
                </div>
                
                <div className='ant-card-right'>
                  <div className='ant-card-head'>
                    <div className='ant-card-head-wrapper'>
                      <div className='ant-card-head-title'>
                      ภาพสินค้าในร้าน
                      </div>
                    </div>

                  </div>
                  <div className='ant-card-body'>
                  
                  <Row gutter={[6, 6]}>
                      <Col className="gutter-row" span={6}>
                      <div className='productImage'>
                      <Image width="100%" src="https://market.toflyn.com/image/house/house1.jpg" />
                      </div>
                      </Col>

                      <Col className="gutter-row" span={6}>
                      <div className='productImage'>
                      <Image src="https://market.toflyn.com/image/house/house1.jpg" />
                      </div>
                      </Col>

                      <Col className="gutter-row" span={6}>
                      <div className='productImage'>
                      <Image src="https://market.toflyn.com/image/house/house3.jpg" />
                      </div>
                      </Col>

                      <Col className="gutter-row" span={6}>
                      <div className='productImage'>
                      <Image src="https://market.toflyn.com/image/house/house4.jpg" />
                      </div>
                      </Col>

                      <Col className="gutter-row" span={6}>
                      <div className='productImage'>
                      <Image src="https://market.toflyn.com/image/house/house5.jpg" />
                      </div>
                      </Col>
                    </Row>

                 </div>
                </div>

              </Col>
              </Row>
              
           
          </div>
          </div>

  )
}

export default Housestore;