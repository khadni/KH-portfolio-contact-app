import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col self-center">
      <div className="text-4xl font-semibold py-6 self-center">
        KH Contact App
      </div>
      <nav className="self-center">
        <Link to="/">Contact List</Link> - <Link to="/add">Add a contact</Link>
      </nav>
    </header>
  );
};

export default Header;
