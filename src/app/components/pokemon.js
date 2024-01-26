"use client"
import Image from "next/image";
import style from './pokemon.module.css'
import {useEffect, useState} from "react";

function Pokemon(){
    const [pokemon, setPokemon]=useState("/vercel.sg");
    const [nombre, setNombre]=useState("pokemon");
    const [numero, setNumero]=useState("");
    const [tipo, setTipo]=useState("tipo");
    const [tamaño, setTamaño]=useState("tamaño");
    const [peso, setPeso]=useState("peso");
    const [habilidades, setHabilidades]=useState("habilidades")
    const [vida, setVida]=useState("vida");
    const url="https://pokeapi.co/api/v2/pokemon/10"
    useEffect(()=>{
        fetch(url).then(res=>res.json())
        .then(data=>{
            setNombre(data.species.name)
            setPokemon(data.sprites.front_default)
            setNumero(data.id)
            setTipo(data.types[0].type.name)
            setTamaño(data.height)
            setPeso(data.weight)
            setHabilidades(data.abilities[0].ability.name)
            setVida(data.stats.stat)

        });
    },[]);
    return(
        <div className={style.contenedor}>
            <h2 className={style.pok}>My Pokemon</h2>
            <br />
            <div>
            <h1 className={style.nomb}>{nombre}</h1>
            <p className={style.num}>{"#0" + numero}</p>
            <Image src={pokemon} height={500} width={500}/>
            </div>

        <div className={style.descrip}>
            <p className={style.acer}>{"Typess=" + tipo}</p>
            <p className={style.acer}>{"Height="+tamaño +"m"}</p>
            <p className={style.acer}>{"Weight="+peso +"kg"}</p>
            <p className={style.acer}>{"Abilities="+ habilidades}</p>

            <br />
            <p className={style.acer}>{"HP="+ vida}</p>

         </div>
        </div>
    );
}

export default Pokemon;