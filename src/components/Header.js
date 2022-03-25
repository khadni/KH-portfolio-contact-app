import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full pt-0 flex flex-col self-center bg-purple-50 border-2 rounded-md">
      <div className="text-3xl text-center my-10">Contact App by KH</div>
      <nav className="self-center">
        <Link
          to="/"
          className="btn inline-block px-6 py-2 mx-3 mb-10 border-2 border-purple-700 text-purple-700 font-medium text-md leading-tight uppercase rounded hover:bg-purple-900 hover:border-purple-900 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          My Contacts
        </Link>
        <Link
          to="/add"
          className="btn inline-block px-6 py-2 mx-3 mb-10 border-2 border-purple-700 text-purple-700 font-medium text-md leading-tight uppercase rounded hover:bg-purple-900 hover:border-purple-900 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Add a contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
