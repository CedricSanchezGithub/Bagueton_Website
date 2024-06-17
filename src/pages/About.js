import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Article from "../components/Article";

export default function About() {
    return (
        <div>


            <Header />

            <Article
                style={{ display: "block" }}
                text={

                    <div>
                        <h1>A propos</h1>
                        <p>
                            Bienvenue sur "Bagueton", mon application de fin d'études en développement web et mobile.<br/>

                            "Bagueton" est le résultat de mon apprentissage en Kotlin, Java, Android, backend, frontend et design.
                            Je présenterai cette application comme projet final pour l'obtention de mon diplôme en juillet
                            2024.<br/>
                            C'est une application de recette conçu par un ancien boulanger, Cédric Sanchez, soucieux de lier son exeperience avec le développement web.<br />
                            Je vous invite à découvrir les fonctionnalités de "Bagueton" et à me contacter pour toute question ou
                            commentaire. Le code est disponible sur github, dans la section documentations.<br/>
                            Je continuerai de mettre à jour l'application tant que possible, s'il peut servir à quelqu'un.

                            Merci de votre intérêt pour "Bagueton".<br/>
                        </p>
                    </div>
                }
            />
            <Footer />


        </div>
    )
}
