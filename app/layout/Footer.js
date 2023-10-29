import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className='section__gap_top'>
      <Container>
        <Row>
          <Col lg={12}>
            <div class="footer-artwork" id="footer-artwork">
              <img src='https://www.rpir.gov.bd/themes/responsive_npf/images/footer_top_bg.png'/>
            </div>
            <div className='dev_credit py-2 text-end'>কারিগরি সহায়তায়: <Link href="#">আব্দুল্লাহ আন-নোমান</Link></div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
