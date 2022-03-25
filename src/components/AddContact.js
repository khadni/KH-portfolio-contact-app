import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newNotes, setNewNotes] = useState("");
  let navigate = useNavigate();

  const addNewContact = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "" || newNotes === "") {
      alert("All the fields are mandatory.");
      return;
    }
    props.addContactHandler(newName, newEmail, newNotes);
    navigate("/");
  };

  return (
    <div className="mt-14 mx-auto w-full px-10 sm:px-32 md:px-48 lg:px-64 xl:px-80 2xl:px-96">
      {/* <div className="mt-6 text-2xl py-6 border-b-2 mb-6 font-semibold">
        Add a contact
      </div> */}
      <form className="flex flex-col" onSubmit={addNewContact}>
        <label className="flex flex-col py-4">
          <div className="mb-2 text-lg">Contact name:</div>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            className="py-3 px-2 placeholder:italic border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-purple-700 focus:ring-2"
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
            className="py-3 px-2 placeholder:italic border border-slate-300 rounded-md shadow-md focus:outline-none ring-purple-700 focus:ring-2"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col py-4">
          <div className="mb-2 text-lg">Notes about the contact:</div>
          <textarea
            name="notes"
            rows="5"
            placeholder="Some notes..."
            className="py-3 px-2 placeholder:italic border border-slate-300 rounded-md shadow-md focus:outline-none ring-purple-700 focus:ring-2"
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
            required
          />
        </label>
        <button className="btn inline-block mt-4 py-3 border-2 bg-purple-700 border-purple-700 text-white font-bold text-md leading-tight uppercase rounded hover:bg-purple-900 hover:border-purple-900 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
