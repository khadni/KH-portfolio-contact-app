import React from "react";
import { useState } from "react";

const AddContact = (props) => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const addNewContact = (e) => {
    e.preventDefault();
    if (newName === "" && newEmail === "") {
      alert("All the fields are mandatory.");
      return;
    }
    props.addContactHandler(newName, newEmail);
  };

  return (
    <div className="mx-auto w-full px-10 sm:px-32 md:px-48 lg:px-64 xl:px-80 2xl:px-96">
      <div className="text-2xl py-6 border-b-2 mb-6 font-semibold">
        Add a contact
      </div>
      <form className="flex flex-col" onSubmit={addNewContact}>
        <label className="flex flex-col py-4">
          <div className="mb-2 text-lg">Contact name:</div>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            className="py-3 px-2 placeholder:italic border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-sky-500 focus:ring-2"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col py-4">
          <div className="mb-2 text-lg">Contact e-mail:</div>
          <input
            type="email"
            name="email"
            placeholder="E-mail..."
            className="py-3 px-2 placeholder:italic border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-sky-500 focus:ring-2"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
        </label>
        <button className="mt-6 px-6 py-4 font-semibold bg-sky-600 w-36 text-white text-lg rounded-md self-center shadow-md hover:bg-sky-700">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;