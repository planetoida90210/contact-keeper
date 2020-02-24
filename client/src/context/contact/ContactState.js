import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Paweł Krajewski",
        email: "pawelkrajewski@gmail.com",
        phone: "222-222-222",
        type: "personal"
      },
      {
        id: 2,
        name: "Daniel Cent",
        email: "cleancity@gmail.com",
        phone: "997-997-997",
        type: "professional"
      },
      {
        id: 3,
        name: "Andrzej Acab",
        email: "andrzeju@gmail.com",
        phone: "420-420-420",
        type: "proffesional"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.provider>
  );
};

export default ContactState;
