import React from 'react'
import { useForm } from "react-hook-form";

function AvisUser() {
      //hookform
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      // Ajustez la structure des données pour correspondre à celle attendue par l'API Spring
      const formattedData = {
        avis: data.avis,
        type: "POSITIF", // Remplacez par la valeur attendue pour le champ "type"
        client: {
          email: data.email,
        },
      };

      const response = await fetch('http://localhost:8080/api/avis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        // La requête a réussi (code de statut 2xx)
        const responseData = await response.json();
        console.log(responseData);

        // Ajoutez ici tout traitement supplémentaire si nécessaire
      } else {
        // La requête a échoué (code de statut autre que 2xx)
        console.error('Erreur lors de la requête POST :', response.status, response.statusText);
      }
    } catch (error) {
      // Gérez les erreurs de la requête
      console.error('Erreur lors de la requête POST :', error);
    }
  };

  return (
    <div className='container flex flex-col h-screen justify-center'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group flex flex-col  mb-4">
        <label htmlFor="avis" className="mb-2 text-lg">
          Votre avis
        </label>
        <textarea
          {...register("avis", { required: true })}
          className="w-full p-2 text-lg text-black rounded-md"
          name="avis"
          id="avis"
          rows="4"
          placeholder="Saisissez votre avis ici..."
        ></textarea>
        {errors.avis && <span className="text-rose-500">Ce champs est requis</span>}
      </div>
      <label htmlFor="email">Votre email</label>
      <div className="form-group flex flex-col mb-4 ">
        <input
          {...register("email", { required: true })}
          type="email"
          className="w-full p-2 text-lg text-black rounded-md"
          placeholder="Votre adresse e-mail"
        />
        {errors.email && <span className="text-rose-500">Ce champs est requis</span> }
      </div>

      <div className="form-group flex flex-col">
        <button type="submit" className="p-2 bg-green-700 rounded-md">
          Soumettre
        </button>
      </div>
    </form>
  </div>
  )
}

export default AvisUser


