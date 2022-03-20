import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "José",
      email: "jose@gmail.com",
    },
    {
      id: "2",
      name: "Jules",
      email: "jules@gmail.com",
    },
    {
      id: "3",
      name: "Karim",
      email: "karim@gmail.com",
    },
  ];

  return (
    <div className="font-poppins">
      <div className="container flex flex-col justify-center mx-auto py-12">
        <Header />
        <AddContact />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
