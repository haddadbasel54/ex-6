import { h } from 'preact';

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className={`shadow ${isDarkMode ? "bg-gray-800" : "bg-slate-300"}`}>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1
          className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
        >
          Random Photo Gallery
        </h1>
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-md ${isDarkMode ? "bg-yellow-300 text-gray-900" : "bg-gray-800 text-white"}`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;
