export default function Header() {
  return (
    <header className="flex items-center justify-between bg-blue-500 px-6 py-3 shadow-md">
      
    
      <div className="text-white">
        <h1 className="text-lg font-semibold">
          Good morning!
        </h1>
        <p className="text-sm opacity-80">Asma Ennafia</p>
      </div>

    
      <div className="flex items-center gap-4">
        <img
          src="bell-regular-full.svg"
          alt="notification"
          className="w-7 h-7 cursor-pointer hover:scale-110 transition"
        />

        <img
          src="imgd.jpg"
          alt="profile"
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
      </div>

    </header>
  );
}