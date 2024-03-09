import React from 'react'
import img1 from './img/img1.svg'
import './styles/output.css';
import Nav from './components/Nav';
import Section from './Section';

export default function Header() {
  return (
    <div className="bg-[#FFF5E8] h-screen">
      <Nav />
      <Section
        height={`h-2/3`}
        text={<div className="text-orange-950 items-center w-3/4 mx-auto">
          <h1 className="font-bold">Bagueton</h1>
          <p className="font-semibold">
            Une application <span className="text-red-500">intuitive</span>, pour
            tout artisants boulangers, pâtissiers, chocolatiers... Soucieux de
            gagner en <span className="text-red-500">productivité</span>.
          </p>
        </div>}
        imagePath={img1}
        altText={"Mockup"}
      />
    </div>
  )
}

