import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

import localFont from 'next/font/local'
const bangla = localFont({ src: '../../fonts/TiroBangla-Regular.ttf' })

export default function Links() {
  return (
      <>
        <Row className={`gy-4 section__gap_top ${bangla.className}`}>
            <Col lg={6}>
                <div className='nms_links_bx'>
                    <h4>আমাদের বিষয়ে</h4>
                    <div className='d-flex'>
                        <div className='__thumb'>
                            <Image
                                src='https://www.rpir.gov.bd/admin-website/images/1571545620aboutus2.png'
                                width={110}
                                height={100}
                                className='img-fluid'
                            />
                        </div>
                        <div className='__content'>
                                <ul>
                                    <li>
                                        <Link href='#'>শিক্ষক/কর্মকর্তা</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>কর্মচারী</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>যোগাযোগ</Link>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={6}>
                <div className='nms_links_bx'>
                    <h4>আমাদের বিষয়ে</h4>
                    <div className='d-flex'>
                        <div className='__thumb'>
                            <Image
                                src='https://www.rpir.gov.bd/admin-website/images/1571545620aboutus2.png'
                                width={110}
                                height={100}
                                className='img-fluid'
                            />
                        </div>
                        <div className='__content'>
                            <ul>
                                <li>
                                    <Link href='#'>শিক্ষক/কর্মকর্তা</Link>
                                </li>
                                <li>
                                    <Link href='#'>কর্মচারী</Link>
                                </li>
                                <li>
                                    <Link href='#'>যোগাযোগ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Col>  
            <Col lg={6}>
                <div className='nms_links_bx'>
                    <h4>আমাদের বিষয়ে</h4>
                    <div className='d-flex'>
                        <div className='__thumb'>
                            <Image
                                src='https://www.rpir.gov.bd/admin-website/images/1571545620aboutus2.png'
                                width={110}
                                height={100}
                                className='img-fluid'
                            />
                        </div>
                        <div className='__content'>
                            <ul>
                                <li>
                                    <Link href='#'>শিক্ষক/কর্মকর্তা</Link>
                                </li>
                                <li>
                                    <Link href='#'>কর্মচারী</Link>
                                </li>
                                <li>
                                    <Link href='#'>যোগাযোগ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Col>  
            <Col lg={6}>
                <div className='nms_links_bx'>
                    <h4>আমাদের বিষয়ে</h4>
                    <div className='d-flex'>
                        <div className='__thumb'>
                            <Image
                                src='https://www.rpir.gov.bd/admin-website/images/1571545620aboutus2.png'
                                width={110}
                                height={100}
                                className='img-fluid'
                            />
                        </div>
                        <div className='__content'>
                            <ul>
                                <li>
                                    <Link href='#'>শিক্ষক/কর্মকর্তা</Link>
                                </li>
                                <li>
                                    <Link href='#'>কর্মচারী</Link>
                                </li>
                                <li>
                                    <Link href='#'>যোগাযোগ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Col> 
        </Row>
      </>
  )
}
