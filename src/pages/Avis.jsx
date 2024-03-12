import React, { useState, useEffect } from 'react';
import AvisItem from '../component/AvisItem';

function Avis() {
  const [avis, setUnAvis] = useState([]);

    //Effectuer une requête HTTP pour récupérer les avis depuis une API
    const search = async() =>{
        try{
            const response = await fetch('http://localhost:8080/api/avis');
            const data = await response.json();
            setUnAvis(data);

        }catch(error){
            console.log(error);
        }
    }

    useEffect(() =>{
        search();
    }, [])

  return (
    //bg-blue-700 text-white min-h-screen
    <section className=" flex items-center justify-center">
  
    <div className='container flex flex-col h-screen justify-center'>
    <h1 className="text-4xl font-bold mb-8 text-center">Les avis sur nos produits</h1>
      <div className = "grid grid-cols-3 gap-4">
        {avis.map((unAvis) => (
          <AvisItem avis = {unAvis}></AvisItem>
        ))}
      </div>
    </div>
    </section>
  );

}

export default Avis;

