import { h } from 'preact';

function Footer({ isDarkMode }) {
  return (
    <footer
      className={`shadow mt-auto ${isDarkMode ? "bg-gray-800" : "bg-black"}`}
    >
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-white text-center">
          &copy; All rights reversed, because why not.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
