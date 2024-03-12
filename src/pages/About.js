import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'

export default function About() {
  return (
    <div>


      <Header />

      <Section
        text={
          <div>
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis est esse non temporibus tenetur! Debitis quas delectus placeat eligendi, fugiat, voluptatum fuga omnis aliquid cupiditate enim nemo quidem, blanditiis possimus.</p>
          </div>
        }
      />
      <Footer />


    </div>
  )
}
