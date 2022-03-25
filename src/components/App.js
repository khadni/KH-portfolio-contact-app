import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import uniqid from "uniqid";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Karim Hadni",
      email: "karim.hadni@gmail.com",
      notes: "Somes notes about Karim... trying to be a front-end dev ASAP!",
    },
  ]);

  const addContactHandler = (name, email, notes) => {
    setContacts([
      ...contacts,
      {
        id: uniqid(),
        name: name,
        email: email,
        notes: notes,
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
        <Router>
          <Header />
          <Routes>
            <Route
              path="add"
              element={<AddContact addContactHandler={addContactHandler} />}
            />
            <Route
              path="/"
              element={
                <ContactList
                  contacts={contacts}
                  getContactId={deleteContactHandler}
                />
              }
            />
            <Route path="/contact/:id" element={<ContactDetails />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
