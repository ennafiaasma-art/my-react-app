
export default function StatusBadge({ status }) {
  const color = {
    "On Going": "bg-green-500 text-white flex items-center justify-center",
    "Upcoming": "bg-blue-500 text-white  flex items-center justify-center",
    "Pending": "bg-yellow-500 text-white  flex items-center justify-center",
    "Confirmed": "bg-green-400 text-white  flex items-center justify-center",
  };

return (
  <p
    className={`px-3 py-1 text-xs font-semibold  rounded-full ${color[status] || "bg-gray-100 text-white"}`}> {status} </p>





  );
 
    



  
 }