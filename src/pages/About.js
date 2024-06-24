import React from 'react'
import Article from "../components/Article";

export default function About() {
    return (
        <div style={{ minHeight: '100vh' }} className={'flex flex-col'}>
            <Article
                className={"justify-center"}
                background={`bg-[#FFF5E8]`}
                text={
                    <div className="text-orange-950 max-w-2xl mx-auto bg-[#FFF5E8] p-5">
                        <h1 style={{ fontSize: '2rem', padding: '20px 0', textDecorationLine: 'underline' }}>A propos</h1>
                        <p>
                        Bienvenue sur "Bagueton", mon application de fin d'études en développement web et mobile.<br/>
                            "Bagueton" est le résultat de mon apprentissage en Kotlin, Java, Android, backend, frontend et design.
                            Je présenterai cette application comme projet final pour l'obtention de mon diplôme en juillet
                            2024.<br/>
                            C'est une application de recette conçu par moi, un ancien boulanger, Cédric Sanchez, soucieux de lier son exeperience avec le développement web.<br />
                            Je vous invite à découvrir les fonctionnalités de "Bagueton" et à me contacter pour toute question ou
                            commentaire. Le code est disponible sur github, dans la section documentations.<br/>
                            Je continuerai de mettre à jour l'application tant que possible, s'il peut servir à quelqu'un.

                            Merci de votre intérêt pour "Bagueton".<br/>
                        </p>
                    </div>
                }
            />
        </div>
    )
}
