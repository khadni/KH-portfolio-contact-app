import React from "react";
import { TrashIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/solid";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <tr className="border-b-2 border-dotted">
      <td className="py-2 flex flex-row items-center">
        <UserCircleIcon className="h-8 w-8 ml-2 mr-4 fill-gray-600" />
        {name}
      </td>
      <td>{email}</td>
      <td>
        <TrashIcon className="fill-red-500 h-6 w-6" />
      </td>
    </tr>
  );
};

export default ContactCard;
