import Image from "next/image";
import { MeiliSearch } from "meilisearch";

export default function Home() {
  
  const client = new MeiliSearch({
    host: 'http://127.233.129.212',
    apiKey: '9674910d2440954f136b0e1537007301972088cd71ca00c44008f4a9a024',
  })


  return (
    <div>
      <div> 
        <input placeholder="Buscar" />
      </div>
    </div>
  );
}
