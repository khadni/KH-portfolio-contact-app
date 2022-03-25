import PreviousMap from "postcss/lib/previous-map";
import React from "react";
import { useLocation } from "react-router-dom";

const ContactDetails = () => {
  const location = useLocation();
  const contactData = location.state;

  return (
    <div className="mx-auto mt-12 w-full">
      <div className="text-2xl py-6 border-b-2 mb-6 font-semibold">
        Details about{" "}
        <span className="text-purple-700">{contactData.name}</span>
      </div>
      <table className="table-auto w-full text-center shadow-md rounded-lg">
        <thead className="border-b-2 bg-gray-50">
          <tr>
            <th className="py-4 font-semibold">NAME</th>
            <th className="py-4 font-semibold">E-MAIL</th>
            <th className="py-4 font-semibold"></th>
          </tr>
        </thead>
        <tbody>
          <th className="py-6 font-normal">{contactData.name}</th>
          <th className="py-6 font-normal">{contactData.email}</th>
        </tbody>
      </table>
      <table className="table-auto w-full mt-10 text-center shadow-md rounded-lg">
        <thead className="border-b-2 bg-gray-50">
          <tr>
            <th className="py-4 font-semibold">NOTES</th>
          </tr>
        </thead>
        <tbody>
          <th className="py-6 px-6 font-normal text-left">
            {contactData.notes}
          </th>
        </tbody>
      </table>
    </div>
  );
};

export default ContactDetails;
