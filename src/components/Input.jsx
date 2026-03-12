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

      
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
          🔍
        </span>

      </div>

    </div>
  );
}