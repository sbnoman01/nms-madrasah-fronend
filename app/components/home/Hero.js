import { Col, Container, Row } from "react-bootstrap";
import localFont from 'next/font/local'
const bangla = localFont({ src: '../../fonts/TiroBangla-Regular.ttf' })

export default function Hero() {
  return (
    <section className="hero_bg justify-content-center align-item-center">
      <Container>
        <Row>
          <Col lg={12}>
            <div className={`hero_contents ${bangla.className}`}>
              <h1>সাতরকুল নূর মোহাম্মদ আলিম মাদ্রাসা</h1>
              <h3>সাতরকুল, বাড্ডা, ঢাকা, ১২১২</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
