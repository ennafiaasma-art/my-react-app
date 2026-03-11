
import StatusBadge from './StatusBadge';
import { useState } from 'react';



export default function TournamentCard({ tournament })  {
  const [isregisterd,setisregisterd]=useState(false);
  function inscrire(){
    return(
      <button className=' px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full'>iscrire</button>
    )
  }
  function deconnexion(){
    return(
      <button className=' px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-full'>deconnexion</button>
    )
  }
  function changeColor(){
    return
    <>
    
    
    
    </>
  }




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
      <button className='px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full'  onClick={setisregisterd(isregisterd=!false)}>me inscrire</button>


    </div>
  );
  
}