import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import img2 from '../img/img2.svg'
import img3 from '../img/img3.svg'
import img4 from '../img/img4.svg'
import img5 from '../img/img5.svg'
import playstore from '../img/playstore.svg'
import Footer from '../components/Footer'
import img1 from "../img/img1.svg";
import {fetchRecipes} from "../services/apiService";


export default function Home() {

    const [totalIngredients, setTotalIngredients] = useState(0);
    const [totalSteps, setTotalSteps] = useState(0);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [lastRecipeTitle, setLastRecipeTitle] = useState('');

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const result = await fetchRecipes();
                setRecipes(result);
                const total = result.reduce((sum, recipe) => {
                    return sum + (recipe.ingredients ? recipe.ingredients.length : 0);
                }, 0);
                setTotalIngredients(total);
                const total2 = result.reduce((sum, recipe) => {
                    return sum + (recipe.steps ? recipe.steps.length : 0);
                }, 0);
                setTotalSteps(total2);
                if (result.length > 0) {
                    setLastRecipeTitle(result[result.length - 1].title);
                }
            } catch (error) {
                setError(error.message);
            }
        };

        getRecipes();
    }, []);

    const lastRecipe = recipes.length > 0 ? recipes[recipes.length - 1] : null;


    return (
        <div>
            <div className="h-screen bg-[#FFF5E8]">
                <Header />
                <Section
                    background={`bg-[#FFF5E8]`}
                    text={
                        <div className="text-orange-950 items-center w-3/4 mx-auto bg-[#FFF5E8]">
                            <h1 className="font-bold">Bagueton</h1>
                            <p className="font-semibold">
                                Une application <span className="text-red-500">intuitive</span>, pour
                                tout artisans boulangers, pâtissiers, chocolatiers... Soucieux de
                                gagner en <span className="text-red-500">productivité</span>.
                            </p>
                        </div>
                    }
                    imagePath={img1}
                    altText={"Mockup"}
                    showExtraContent={true}
                    extraContent={
                        <div className={"flex flex-col items-center justify-center"}>
                            <div className={"flex w-full"} style={{ justifyContent: "space-evenly" }}>
                               <div className={"flex flex-col items-center"}> <p className="font-semibold text-orange-950">Total de Recettes</p> <p className={"font-semibold text-red-500"}> {recipes.length}</p></div>
                                <div className={"flex flex-col items-center"}><p className="font-semibold text-orange-950">Total d'ingrédients</p>  <p className={"font-semibold text-red-500"}>{totalIngredients}</p></div>
                                <div className={"flex flex-col items-center"}>  <p className="font-semibold text-orange-950">Total d'étapes</p>  <p className={"font-semibold text-red-500"}>{totalSteps}</p></div>
                                {error && <p className="text-red-500 mt-2">{error}</p>}
                            </div>
                            <br/>
                            <div className={"font-semibold text-orange-950"}>Dernière recette ajoutée : <span className={"font-semibold text-red-500"}>{lastRecipeTitle}</span></div>
                        </div>
                    }
                />
            </div>

            <Section
                height={`h-screen`}
                background={`bg-[#EBD5B8]`}
                text={
                    <div className="text-center">
                        <p className="font-semibold">
                            Une gestion <span className="text-red-500">efficace</span> des commandes,
                            <br />
                            avec un rappel quotidien.
                        </p>

                    </div>
                }
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
