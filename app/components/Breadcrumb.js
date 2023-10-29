import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import localFont from 'next/font/local'
const bangla = localFont({ src: '../fonts/TiroBangla-Regular.ttf' })

export default function Breadcrumb({ title }) {
  return (
    <div className='nms_breadcrumb'>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className='breadcrumb_cont'>
                          <h1 className={bangla.className}>{title}</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
