import React from 'react'
import logo from '../img/bagueton.svg'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='navigation' style={{height: "30%"}}>
            <nav>
                <div className="logo flex justify-center pt-5 ">
                    <img src={logo} alt="logo bagueton" />
                </div>
                <div className="navbar text-orange-950  text-xl">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#FFF5E8] text-center">
                            <NavLink to='/'> <li className="p-10 text-xl hover:bg-[#EBD5B8]">Accueil</li></NavLink>
                                <li className="py-5">
                                    <ul className="py-5 text-center ">
                                        <li className="py-5 place-content-center hover:bg-[#EBD5B8]"><NavLink to='/' className={"text-xl"}>Documentation I</NavLink></li>
                                        <li className="py-5 place-content-center hover:bg-[#EBD5B8]"><NavLink to='/' className={"text-xl"}>Documentation II</NavLink></li>
                                    </ul>
                                </li>
                                <li className="py-5 place-content-center hover:bg-[#EBD5B8]"><NavLink to='/about' className={"text-xl "}>A propos</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1  text-xl">
                            <li className={"m-10 hover:bg-[#EBD5B8] p-5 py-3 rounded-lg"}><NavLink to='/' >Accueil</NavLink></li>
                            <li className={"m-10 hover:bg-[#EBD5B8] p-5 py-3 rounded-lg"}>
                                <details>
                                    <summary>Documentation</summary>
                                    <ul className=" bg-transparent">
                                        <li><NavLink to='/documentation' className={"hover:bg-[#EBD5B8] p-5 py-3 rounded-lg"}>Submenu 1</NavLink></li>
                                        <li><NavLink to='/documentation' className={"hover:bg-[#EBD5B8] p-5 py-3 rounded-lg"}>Submenu 2</NavLink></li>
                                    </ul>
                                </details>
                            </li>
                            <li><NavLink to='/about' className={"hover:bg-[#EBD5B8] m-10 p-5 py-3 rounded-lg"}>A propos</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                    </div>
                </div>
            </nav>
        </div>
    )
}
