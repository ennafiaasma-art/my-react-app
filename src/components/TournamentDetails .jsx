import StatusBadge from "./StatusBadge";

const participants = [
  { id: "u1", name: "Ethan Miller", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u1" },
  { id: "u2", name: "Noah Smith", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u2" },
  { id: "u3", name: "James Anderson", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u3" },
  { id: "u4", name: "David Hall", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u4" }
];

export default function TournamentDetails() {
  return (
    <>
      {participants.map((participant, index) => {
        return (
          <div key={index} className="flex items-center justify-between mb-3">
            
            <div className="flex items-center gap-3">
              <img
                src={participant.avatar}
                className="w-10 h-10 rounded-full"
                alt="player"
              />
              <span className="font-medium">{participant.name}</span>
            </div>

            <StatusBadge status={participant.status} />

          </div>
        );
      })}
    </>
  );
}