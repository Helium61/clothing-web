
import '../App.css'; // Ensure you have Tailwind imported here
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

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
      <nav className="bg-gray-800 text-white p-4 flex items-center">
        <ul className="flex-1 flex justify-center space-x-6 font-serif text-lg">
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
        <div className="flex items-center space-x-4">
          <a href="#account" className="hover:text-gray-300">
            <i className="fas fa-user text-lg"></i> {/* Font Awesome User Icon */}
          </a>
          <a href="/cart" className="hover:text-gray-300">
            <i className="fas fa-shopping-cart text-lg"></i> {/* Font Awesome Cart Icon */}
          </a>
        </div>
      </nav>
    </div>
  );
}

export default App;
