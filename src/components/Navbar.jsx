import "../App.css"; // Ensure you have Tailwind imported here

function App() {
  return (
    <div className="App">
      <header className="bg-gray-600 p-2 text-white text-center">
        <img
          src="src/assets/i-need-a-logo-for-my-clothing-brand-which-is-named-Ho04MFcuTE6FNDkUI-unrA-ppLbndhiRrG1vQOc_2dZfw.jpeg"
          alt="Logo"
          className="mx-auto w-24 h-24 rounded-full" // Added classes for size and circular shape
        />
      </header>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex justify-center space-x-6 font-serif text-lg">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      
    </div>
  );
}

export default App;
