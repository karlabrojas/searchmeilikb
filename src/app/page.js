import Image from "next/image";
import { MeiliSearch } from "meilisearch";
import { useState } from "react";

export default function Home() {
  const [resultados, setResultados] = useState ([]); 

  const client = new MeiliSearch({
    host: 'http://127.233.129.212',
    apiKey: '9674910d2440954f136b0e1537007301972088cd71ca00c44008f4a9a024',
  })

  const buscar = async(e) => {
    client.index("movies").search(e.target.value).then((resultado => setResultados(resultado.hits)))
  }

  return (
    <div>
      <div> 
        <input placeholder="Buscar" onChange={buscar}/>
      </div>
      <div> 
        {
          resultados.map((index) =>{
            return (
              <div key ={index.id}>
                <img
                src="index.poster
                "/>
                <h2>index.title</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
