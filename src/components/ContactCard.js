import React from "react";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/solid";

const ContactCard = (props) => {
  const { id, name, email, notes } = props.contacts;
  const contactData = props.contacts;
  return (
    <tr className="border-b-2 border-dotted hover:bg-purple-50">
      <td className="py-2 flex flex-row items-center">
        <Link
          to={{
            pathname: `/contact/${id}`,
          }}
          state={contactData}
          className="py-2 flex flex-row items-center"
        >
          <UserCircleIcon className="h-8 w-8 ml-2 mr-4 fill-gray-600" />
          {name}
        </Link>
      </td>
      <td>{email}</td>
      <td>
        <div onClick={() => props.handleClick(id)}>
          <TrashIcon className="fill-red-500 h-6 w-6 hover:cursor-pointer" />
        </div>
      </td>
    </tr>
  );
};

export default ContactCard;
