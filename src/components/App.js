import React from "react";
import uniqid from "uniqid";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Karim Hadni",
      email: "karim.hadni@gmail.com",
    },
  ]);

  const addContactHandler = (name, email) => {
    setContacts([
      ...contacts,
      {
        id: uniqid(),
        name: name,
        email: email,
      },
    ]);
  };

  const deleteContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="font-poppins">
      <div className="container flex flex-col justify-center mx-auto py-12">
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={deleteContactHandler} />
      </div>
    </div>
  );
}

export default App;
