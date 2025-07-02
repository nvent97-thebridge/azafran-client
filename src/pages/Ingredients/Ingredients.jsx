import { useNavigate } from "react-router";
import { useState, useEffect, useRef, } from "react";
import './index.css'
const Ingredients = () => {

    return (
        <>
            <script type="module">
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            </script>
            <main id="ingredients-main">
                <section id="ingredients-header" className="">
                    <p>Pantry</p>
                    <button id="" className=""> <span>+</span> Ingredient</button>
                </section>
                <section id="ingredients-body" className="">
                    <article id="" className="">
                        <h3>Tomate</h3>
                    </article>
                    <article id="" className="">
                        <h3>Huevos</h3>
                    </article>
                    <article id="" className="">
                        <h3>Cebolla</h3>
                    </article>
                    <article id="" className="">
                        <h3>Browni</h3>
                    </article>
                </section>
                <section id="ingredients-footer" className="">
                    <button id="" className="">Create Recipe <span>+</span> </button>
                </section>
            </main>
            </>
    );

}

export {
    Ingredients,
}