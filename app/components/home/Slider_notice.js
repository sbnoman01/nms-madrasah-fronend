
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Container, Row } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Image from 'next/image'


import 'react-tabs/style/react-tabs.css';
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';
import Link from 'next/link';
import localFont from 'next/font/local'
const bangla = localFont({ src: '../../fonts/TiroBangla-Regular.ttf' })


export default function Slider_notice() {
  return (
      <section className={`section__gap_top ${bangla.className}`}>
        <Container>
            <Row>
                <Col lg={7}>
                    <Swiper
                        scrollbar={{
                            hide: true,
                        }}
                        modules={[Scrollbar]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <Image
                                src="https://images.pexels.com/photos/11780365/pexels-photo-11780365.jpeg"
                                height={300}
                                width={1200}
                                alt="Picture of the author"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="https://images.pexels.com/photos/11780365/pexels-photo-11780365.jpeg"
                                height={300}
                                width={1200}
                                alt="Picture of the author"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="https://images.pexels.com/photos/11780365/pexels-photo-11780365.jpeg"
                                height={300}
                                width={1200}
                                alt="Picture of the author"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="https://images.pexels.com/photos/11780365/pexels-photo-11780365.jpeg"
                                height={300}
                                width={1200}
                                alt="Picture of the author"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="https://images.pexels.com/photos/11780365/pexels-photo-11780365.jpeg"
                                height={300}
                                width={1200}
                                alt="Picture of the author"
                            />
                        </SwiperSlide>
                    </Swiper>
                </Col>
                <Col lg={5}>
                    <div className="notice_board">
                        <div className='widget_title'>
                            <h3>নোটিশ বোর্ড</h3>
                        </div>
                        <div className='notice_tabs'>
                            <Tabs>
                                <TabList>
                                    <Tab>নোটিস</Tab>
                                    <Tab>ইভেন্টস</Tab>
                                </TabList>

                                <TabPanel>
                                    <>
                                    <div className='notice_lists_wrap'>
                                        <ul>
                                            <li className='notice_item'>
                                                <div className='_ni_date_wrap'>
                                                    <div className='_ni_date'>
                                                        <span className='__date'>9</span>
                                                        <span className='__month'>সেপ্টম্বর</span>
                                                    </div>
                                                </div>
                                                <div className='_ni_content'>
                                                    <h5><Link href="#">ফাজিল পাস প্রথম বর্ষের ওরিয়েন্টেশন ক্লাস ১১-০৯-২০২৩স ১১-০৯-২০২৩স ১১-০৯-২০২৩স ১১-০৯-২০২৩নোটিশ দেখুন</Link></h5>
                                                </div>
                                            </li>
                                            <li className='notice_item'>
                                                <div className='_ni_date_wrap'>
                                                    <div className='_ni_date'>
                                                        <span className='__date'>9</span>
                                                        <span className='__month'>সেপ্টম্বর</span>
                                                    </div>
                                                </div>
                                                <div className='_ni_content'>
                                                    <h5><Link href="#">ফাজিল পাস প্রথম বর্ষের ওরিয়েন্টেশন ক্লাস ১১-০৯-২০২৩স ১১-০৯-২০২৩স ১১-০৯-২০২৩স ১১-০৯-২০২৩নোটিশ দেখুন</Link></h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    </>
                                </TabPanel>
                                  
                                <TabPanel>
                                    <h2>Any content 2</h2>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
