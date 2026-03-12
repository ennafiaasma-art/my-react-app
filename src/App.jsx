import React from "react";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import TournamentCard from "./components/TournamentCard.jsx";
import { tournamentData } from "./data/tournamentDB";
import RegistrationForm from "./components/RegistrationForm .jsx";

function App() {
  
  return (
    <div>
      <Header />
      <Input />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {tournamentData.map((tournament) => (
          <TournamentCard
            key={tournament.id}
            tournament={tournament}
          />
        ))}
       

      </div>
    </div>
  );
}

export default App;