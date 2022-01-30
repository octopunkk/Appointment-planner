import React from "react";

export const ContactPicker = (props) => {
  return (
    <select>
      <option selected="selected" key="" value="">
        No contact selected
      </option>
      {props.contacts.map((contact) => {
        return (
          <option key={contact.name} value={contact.name}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
