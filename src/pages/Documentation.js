import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function Documentation() {
  return (
    <div>
        <Header />
        <Section 
        text={
          <div className='bg-white'>
            <h1>Documentation</h1>
            <br />
            <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptatem reprehenderit voluptas vitae pariatur amet, odit ipsum vel ipsam ullam dolor. Accusantium architecto omnis tempore doloremque unde cum id impedit!</p>
          </div>
        }/>
      <Footer />
    </div>
  )
}
