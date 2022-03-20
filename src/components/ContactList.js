import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const contacts = [
    {
      id: "1",
      name: "Georges",
      email: "george.p@gmail.com",
    },
  ];
  //-- RENDER CONTACTS LIST---
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        handleClick={deleteContactHandler}
      />
    );
  });

  //-- CONTACT LIST RETURN---

  return (
    <div className="mx-auto mt-12 w-full px-10 sm:px-16 md:px-24 lg:px-42 xl:px-60 2xl:px-96">
      <div className="text-2xl py-6 border-b-2 mb-6 font-semibold">
        Contact List
      </div>
      <table className="table-auto w-full text-center shadow-md rounded-lg">
        <thead className="border-b-2 bg-gray-50">
          <tr>
            <th className="py-4 font-semibold">NAME</th>
            <th className="py-4 font-semibold">E-MAIL</th>
            <th className="py-4 font-semibold"></th>
          </tr>
        </thead>
        <tbody>{renderContactList}</tbody>
      </table>
    </div>
  );
};

export default ContactList;
