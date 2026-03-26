function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Dev.Guenay</h1>

        <ul className="flex gap-6 text-sm">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li
  onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
  className="cursor-pointer hover:text-gray-400"
>
  Projects
</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;