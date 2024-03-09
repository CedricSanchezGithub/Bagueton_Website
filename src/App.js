import Header from './Header';
import './styles/output.css';
import './styles/style.css'
import img2 from './img/img2.svg'
import img3 from './img/img3.svg'
import img4 from './img/img4.svg'
import img5 from './img/img5.svg'
import playstore from './img/playstore.svg'
import React, { useEffect } from 'react'
import Footer from './Footer';
import Section from './Section';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importez le fichier CSS

export default function App() {

  useEffect(() => {
    AOS.init({
      // options ici
      duration: 1000,
    });
  }, []);

  return (
    <div>

      <Header />
      <Section
        height={`h-screen`}
        background={`bg-[#EBD5B8]`}
        text={<p className="font-semibold">
          Une gestion <span className="text-red-500">efficace</span> des commandes,
          <br />
          avec un rappel quotidien
        </p>}
        imagePath={img2}
        altText="mockup"
      />
      <Section
        height={`h-screen`}
        background={`bg-[#FFF5E8]`}
        text={<p className="font-semibold">
          Vos <span className="text-red-500">recettes</span> à portée de main,
          disponible rapidement...
        </p>}
        imagePath={img3}
        altText="mockup" />
      <div className='justify-between'>
        <section className="bg-[#EBD5B8] h-screen grid items-center">
          <div
            className="flex flex-col-reverse items-center justify-between max-w-7xl mx-auto"
          >
            <div className="text-orange-950 items-center w-3/4 mx-auto">
              <p className="font-semibold text-center text-xl" data-aos="fade-right">
                ... Ainsi que de nombreuses autres
                <span className="text-red-500"> fonctionnalitées</span>, <br ></br>
                à découvrir sur
                l’application Bagueton !
              </p>
              <div className='flex justify-center'>
                <img
                  data-aos="fade-left"
                  className="max-w-44 mt-5"
                  src={playstore}
                  alt="googleplay"
                />
              </div>
            </div>
            <div className="img flex place-content-center">
              <img
                data-aos="fade-up"
                className="max-w-80"
                src={img4}
                alt="Mockup" />
              <img
                className="max-w-80 hidden lg:block"
                src={img5}
                alt="Mockup"
                data-aos="fade-down"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}



