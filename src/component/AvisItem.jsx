import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function AvisItem({ avis }) {
  //Logique de gestion des likes
  const etat = avis.type === 'POSITIF'; //true ou false suivant type
  const [favoris, setFavoris] = useState(etat); //initialise favoris avec etat
  console.log("avis.type" + avis.type + "id" + avis.id + "favoris" + favoris);

  // useEffect(() => {
  //   console.log("Use effect ! ");
    
  // }, [])

  const handleFavoris = async () => {
    try {
      // Inverser l'état de favoris et obtenir sa valeur actuelle
      setFavoris(prevFavoris => {
        return !prevFavoris;
      });
  
      //Récupération de l'identifiant du commentaire
      const commentaireId = avis.id;
      const typeAvis = !favoris ? 'POSITIF' : 'NEGATIF'; // Utilisation de la nouvelle valeur de favoris
  
      //Requête PUT vers API
      const response = await fetch(`http://localhost:8080/api/avis/${commentaireId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: typeAvis,
        }),
      });
  
      if (!response.ok) {
        // La requête a échoué (code de statut autre que 2xx)
        console.error('Erreur lors de la requête PUT :', response.status, response.statusText);
      }
    } catch (error) {
      // Gérer les erreurs de la requête
      console.error('Erreur lors de la requête PUT :', error);
    }
  };
  

  return (
    <div key={`avis-${avis.id}`} className='p-4 rounded-md bg-slate-50 text-black'>
      <p className='flex justify-end items-center'>
        {/* Utilisation d'une condition ternaire pour afficher le bouton favori */}
        <button type='button' onClick={handleFavoris}>
          {favoris ? (
            <span className='text-2xl'>&#9829;</span>
          ) : (
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
