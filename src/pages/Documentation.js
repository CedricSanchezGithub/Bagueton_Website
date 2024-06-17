import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function Documentation() {
    return (
        <div className={"h-screen"}>
            <Header/>
            <Section
                className={"h-1"}
                background={`bg-[#FFF5E8]`}
                text={
                    <div>
                        <h1>Documentation</h1>
                        <br/>
                        <br/>
                        <h2>- Documents :</h2><br/>
                        <a>* Mémoire Bagueton.doc</a> <br/>
                        <a>* Présentation.pdf</a> <br/>
                        <a>* Dossier professionnel.doc</a>
                        <br/>
                        <br/>
                        <h2>- Github :</h2><br/>
                            <a href={"https://github.com/CedricSanchezGithub/Bagueton_API"}>Bagueton Backend</a><br/>
                        <a href={"https://github.com/CedricSanchezGithub/Bagueton_Client"}>Bagueton Client
                            Android</a><br/>
                        <a href={"https://github.com/CedricSanchezGithub/Bagueton_Website"}>Bagueton Website</a>

                    </div>
                }/>
            <Footer />
        </div>
    )
}
