"use client"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {

  const router = useRouter();
  const currentRoute = router.pathname;

  const [activeToggle, setActiveToggle] = useState(false);
  const [sidenavToggle, setSidenavToggle] = useState(false);

  function hamburgerHangle() {
    setActiveToggle(activeToggle => !activeToggle);
    setSidenavToggle(sidenavToggle => !sidenavToggle);
  }

  let toggleHactive = activeToggle ? 'h-active' : '';
  let toggleSideNav = sidenavToggle ? 'slidenav' : '';

  return (

    <header className='site_header'>
      <Container>
        <Row>
          <Col xl={2} md={3} className='col-6'>
            <Link className='navbar-brand' href="/">
              <img src='/assets/images/logo.svg' alt='wprealizer logo' />
            </Link>
          </Col>
          <Col xl={10} md={9} className='col-6'>
            <a href="javascript:void(0)" onClick={hamburgerHangle} className={`hidden-lg hamburger ${toggleHactive}`}>
              <span className="h-top"></span>
              <span className="h-middle"></span>
              <span className="h-bottom"></span>
            </a>
            <nav className={`main-nav justify-content-end ${toggleSideNav}`}>
              <div className="logo mobile-ham-logo d-xl-none d-block text-left">
                <Link className='navbar-brand' href="/">
                  <img src='/assets/images/logo.svg' alt='' />
                </Link>
              </div>
              <ul className='me-5'>
                <li className={currentRoute === '/' ? 'envoy-menu-active' : ''}>
                  <Link href="/">Home</Link>
                </li>
                <li className={currentRoute === '/themes' ? 'envoy-menu-active' : ''}>
                  <Link href="/themes" onClick={hamburgerHangle}>Themes</Link>
                </li>
                <li className={currentRoute === '/services' ? 'envoy-menu-active' : ''}>
                  <Link href="/services" onClick={hamburgerHangle}>Services</Link>
                </li>
                <li className={currentRoute === '/blog' ? 'envoy-menu-active' : ''}>
                  <Link href="/blog" onClick={hamburgerHangle}>Blog</Link>
                </li>
                <li className={currentRoute === '/contact' ? 'envoy-menu-active' : ''}>
                  <Link href="/contact" onClick={hamburgerHangle}>Contact</Link>
                </li>
              </ul>
              <div className="btn-wrap flex-shrink-0">
                <Link href="#" className='btn__style_1_outline me-2' onClick={hamburgerHangle}>Documentation</Link>
                <Link href="https://support.wprealizer.com/" target='_blank
                            
                            ' className='btn__style_1' onClick={hamburgerHangle}>Support</Link>
              </div>
            </nav>
          </Col>
        </Row>
      </Container>

    </header>
  )
}