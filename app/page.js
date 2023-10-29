import { Col, Container, Row } from "react-bootstrap";
import About from "./components/home/About";
import Hero from "./components/home/Hero";
import Slider_notice from "./components/home/Slider_notice";
import Sidebar from "./components/sidebar";
import Links from "./components/home/Links";

export default function Home() {
  return (
    <>
      <Hero />
      <Slider_notice />

      <Container>
        <Row className="gx-5">
          <Col lg={8}>
            <About />
            <Links/>
          </Col>
          <Col lg={4}>
              <Sidebar/>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}
