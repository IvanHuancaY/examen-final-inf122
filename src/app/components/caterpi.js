import React from "react";
import style from './pokemon.module.css'
import { useEffect, useState } from "react";

function Pokemon(){
    const [pokemon, setPokemon]=useState("vercel.sg");
    const url="https://pokeapi.co/api/v2/pokemon/caterpie"
    useEffect(()=>{
        fetch(url).then(res=>res.json())
        .then(data=>{
            setPokemon(data.sprites.front_default)
        });
    },[]);
    return(
        <div className={style.contenedor}>
            <h1>My Pokemon</h1>
        </div>
    );
}

export default Pokemon;