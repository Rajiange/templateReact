import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container } from 'react-bootstrap'

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <main>
        <Container>
        <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
