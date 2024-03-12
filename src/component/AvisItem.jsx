import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AvisItem({ avis }) {

  //Logique de gestion des likes
  const [favoris, setFavoris] = useState(false);
  const handleFavoris = () => {
    setFavoris(!favoris);
  };

  return (
    <div key={`avis-${avis.id}`} className='p-4 rounded-md bg-slate-50 text-black'>
      <p className='flex justify-end items-center'>
        {/*Utilisation d'une condition ternaire pour afficher le bouton favori */}
          <button type='button' onClick={handleFavoris}>
            {favoris ?(
                 <span className='text-2xl'>&#9829;</span>
            ):(
                 <span className='text-2xl'>&#9825;</span>
            )}
   
           </button>

      </p>
      <div className='texte'>{avis.avis}</div>
      <h4 className='texte'>{avis.client.email}</h4>
    </div>
  );
}

AvisItem.propTypes = {
  avis: PropTypes.shape({
    id: PropTypes.number,
    avis: PropTypes.string,
    type: PropTypes.string,
    client: PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
    }),
  }),
};

export default AvisItem;
