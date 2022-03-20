import React from "react";
import { TrashIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/solid";

const ContactCard = (props) => {
  const { name, email, id } = props.contact;
  return (
    <tr className="border-b-2 border-dotted hover:bg-gray-100">
      <td className="py-2 flex flex-row items-center">
        <UserCircleIcon className="h-8 w-8 ml-2 mr-4 fill-gray-600" />
        {name}
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
