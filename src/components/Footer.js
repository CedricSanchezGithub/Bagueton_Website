import React from 'react'
import logoADRAR from '../img/logo01_APN_B.png'

export default function Footer() {
    return (
        <div>
            <footer className="footer footer-center flex flex-col items-center w-full p-4 bg-yellow-950 text-orange-200">
                <p>
                    Copyright © 2024 
                    <a className="font-semibold" href="mailto:cedric.sanchez.pro@gmail.com">Cédric Sanchez</a>
                     <img src={logoADRAR} className='w-40' alt='logo adrar' />
                </p>
            </footer>
            
        </div>
    )
}
