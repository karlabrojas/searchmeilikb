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
      <div className="flex justify-center content-center my-4"> 
        <input placeholder="Buscar" 
        value={buscarPeliculas}
        onChange={buscar}
        type="text"
        className="w-3/4 bg-gray-100 h-12 p-4 rounded-lg "/>
      </div>
      <div className="grid grid-cols-3 m-10 bg-gray-50 " > 
        {
          resultados.map((movie) =>{
            return (
              <div key ={movie.id} className=" bg-indigo-100 overflow-hidden shadow-2xl my-6  flex flex-row w-96 bg-blue-50  mx-10 h-80">
                <img
                src={movie.poster}
                alt={movie.title}
                width={200}
                />
                <div>
                <h2 className="text-2xl m-5 text-center font-mono font-semibold text-pink-600">{movie.title}</h2>
                <p className="overflow-hidden m-4 text-sm">{movie.overview}</p>
              </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
