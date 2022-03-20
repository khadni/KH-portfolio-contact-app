import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col self-center">
      <div className="text-4xl font-semibold py-6 self-center">Contact App</div>
      <nav className="self-center">
        <Link
          to="/"
          className="py-2 px-4 mr-6 border-2 border-black rounded-md shadow-md hover:bg-gray-100"
        >
          My Contacts
        </Link>
        <Link
          to="/add"
          className="py-2 px-4 border-2 bg-sky-600 border-sky-600 text-white rounded-md shadow-md hover:bg-sky-700"
        >
          Add a contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
