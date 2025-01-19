"use client"; 


import Image from "next/image";
import { MeiliSearch } from "meilisearch";
import { useState } from "react";

const client = new MeiliSearch({
  host: 'http://172.233.129.212/',
  apiKey: '9674910d2440954f136b0e1537007301972088cd71ca00c44008f4a9a024',
})


export default function Home() {
  const [buscarPeliculas, setBuscarPeliculas] = useState ("")
  const [resultados, setResultados] = useState ([]); 


  const buscar = async(e) => {
    const query = e.target.value;
    setBuscarPeliculas(query)
    if(query){
      const results = await client.index("movies").search(query);setResultados(results.hits);
    } else {
      setResultados([])
    }
  }

  return (
    <div>
      <div> 
        <input placeholder="Buscar" 
        value={buscarPeliculas}
        onChange={buscar}
        type="text"/>
      </div>
      <div> 
        {
          resultados.map((movie) =>{
            return (
              <div key ={movie.id} className="overflow-hidden shadow-lg my-6">
                <img
                src={movie.poster}
                alt={movie.title}
                />
                <h2>{movie.title}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
