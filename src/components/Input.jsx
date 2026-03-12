 export default function Input() {
  return (
    <div className="my-5 flex justify-center">
      
      <div className="relative w-full max-w-md">
        
     
        <input
          type="text"
          required
          placeholder="Search..."
          className="w-full px-12 py-3 border border-gray-300 rounded-full 
          focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        />

      
       

      </div>

    </div>
  );
}