import React from 'react'
import Header from './Header'
import Homepage from '../Homepage'
import Footer from './Footer'

const BaseLayout = (props) => {
  return (
    <>
        <Header />
        
        <br />
        
        {props.children}

        <br />

        <Footer />
    </>
  )
}

export default BaseLayout