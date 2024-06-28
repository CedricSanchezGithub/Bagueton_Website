import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function Documentation() {
    return (
            <div className={"h-screen bg-[#FFF5E8] flex flex-col justify-between"}>
            <Header/>
            <Section
                className={"h-1"}
                background={`bg-[#FFF5E8]`}
                text={
                    <div>
                        <h1 style={{ fontSize: "2rem", textDecorationLine: 'underline'}}>Documentation</h1>
                        <br/>
                        <br/>
                        <h2>- Documents :</h2><br/>
                        <a href={"../documents/Dossier_projet_Cedric_Sanchez.docx"}><i className="fa-solid fa-download" style={{ padding: "0 10px 0 0"}}></i> Mémoire Bagueton.doc</a> <br/>
                        <a href={"../documents/Dossier_Professionnel_Cedric_Sanchez.docx"}><i className="fa-solid fa-download" style={{ padding: "0 10px 0 0"}}></i> Présentation.pdf</a> <br/>
                        <a href={"../documents/Dossier_Professionnel_Cedric_Sanchez.docx"}><i className="fa-solid fa-download" style={{ padding: "0 10px 0 0"}}></i> Dossier professionnel.doc</a>
                        <br/>
                        <br/>
                        <h2>- Github :</h2><br/>
                        <a href={"https://github.com/CedricSanchezGithub/Bagueton_API"}> <i class="fa-brands fa-github" style={{ padding: "0 10px 0 0"}}></i>Bagueton
                            Backend</a><br/>
                        <a href={"https://github.com/CedricSanchezGithub/Bagueton_Client"}><i class="fa-brands fa-github" style={{ padding: "0 10px 0 0"}}></i>Bagueton
                            Client
                            Android</a><br/>
                        <a href={"https://github.com/CedricSanchezGithub/Bagueton_Website"}><i class="fa-brands fa-github" style={{ padding: "0 10px 0 0"}}></i>Bagueton
                            Website</a>

                    </div>
                }/>
            <Footer />
            </div>
    )
}
