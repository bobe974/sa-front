import React from "react";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className = "container flex flex-col h-screen justify-center items-center">
      <h1 className="text-2xl mb-2">
        Merci de deposer un avis
      </h1>
      <Link to={"/donner-un-avis"} className = "text-green-500 border-b border-green-500">Donner mon avis</Link>
    </div>
  );
}

export default Accueil;
