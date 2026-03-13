import { tournamentData } from "./data/tournamentDB";

export default function TournamentDetails() {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?u=u5"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Aiden Davis</span>
        </div>

        <span className="text-xs px-3 py-1 rounded-full bg-yellow-400 text-white">
          Pending
        </span>
      </div>
    </>
  );
}