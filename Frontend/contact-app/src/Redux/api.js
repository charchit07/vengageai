// api.js
import axios from "axios";
import { ADD_CONTACT, SET_CONTACTS } from "./actionType";

const API_BASE_URL = 'https://important-sunbonnet-slug.cyclic.app/api/contacts';

export const fetchContacts = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    console.log(data);  // Log the complete data
    return data;        // Return the data if needed
  } catch (error) {
    console.error(SET_CONTACTS, error);
    throw error; // Propagate the error to the calling function
  }
};

export const createContact = (contact) => async (dispatch) => {
  //   const response = await fetch(API_BASE_URL, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(contact),
  //   });
  //   return response.json();
  // dispatch({type:loading})
  await axios.post(API_BASE_URL, contact)
    .then((res) => dispatch({ type: ADD_CONTACT, payload: res.contact }));
};

export const updateContact = async (contact) => {
  const response = await fetch(`${API_BASE_URL}/${contact.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });
  return response.json();
};

export const deleteContact = async (contactId) => {
  const response = await fetch(`${API_BASE_URL}/${contactId}`, {
    method: 'DELETE',
  });
  return response.json();
};
