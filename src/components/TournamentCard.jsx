
import StatusBadge from './StatusBadge';
import { useState } from 'react';
import RegistrationForm from './RegistrationForm ';



export default function TournamentCard({ tournament })  {
  const [isregisterd,setisregisterd]=useState(false);
 




  return (
       <div className="bg-white p-4 rounded-xl shadow mt-4">

      <div className="flex justify-between items-center">
        
        <h2 className="font-semibold">{ tournament.title}</h2>
        <StatusBadge status={tournament.status} />

      </div>


     

      <p className="text-gray-500 text-sm mt-2">
        {tournament.description}
      </p>

      <div className="text-sm mt-3 space-y-1 text-gray-600">
        <p>👥 {tournament.participants.length} participants</p>
        <p>🏆 {tournament.type}</p>
        <p>📅 {tournament.date}</p>
        <p>📍 {tournament.location}</p>
      </div>
        <button
        className={`px-3 py-1 text-xs font-semibold text-white rounded-full
           ${ isregisterd ? "bg-red-500" : "bg-gray-500" }`}
        onClick={() => setisregisterd(!isregisterd)}>
        {isregisterd ? "deconnexion" : "me inscrire"}
        
        
                

      </button>
        {isregisterd && (<RegistrationForm/>) }
        
      

    </div>
  );
  
}
    
