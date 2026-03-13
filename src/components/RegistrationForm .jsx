import { useState } from "react"
export default function RegistrationForm() {
     const [nom,setnom]=useState("");
     const [Equipe,setEquipe]=useState("");
     
  return (
   
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      
      <form className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
        
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Inscription Joueur
        </h2>

      
        <div>
          <label htmlFor="nom" className="block text-gray-600 font-medium">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
           
            value={nom}
            onChange={(e)=>setnom(e.target.value)}
          
            
            placeholder="Entrer votre nom"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p>{nom.length < 3 ? "remplir tous les champs" : ""}</p>
        </div>

      
        <div>
          <label htmlFor="equipe" className="block text-gray-600 font-medium">
            Équipe
          </label>
          <input
            type="text"
            id="equipe"
            name="equipe"
            minLength={3}
            maxLength={8}
             value={Equipe}
            onChange={(e)=>setEquipe(e.target.value)}
            placeholder="Nom de l'équipe"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

      
        <div>
          <label htmlFor="niveau" className="block text-gray-600 font-medium">
            Niveau
          </label>
          <select
            id="niveau"
            name="niveau"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Choisir le niveau</option>
            <option value="debutant">Débutant</option>
            <option value="intermediaire">Intermédiaire</option>
            <option value="avance">Avancé</option>
          </select>
        </div>

     
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
           disabled={nom.length < 3}
        >
          Envoyer
        </button>
        

      </form>
    </div>
  );
}