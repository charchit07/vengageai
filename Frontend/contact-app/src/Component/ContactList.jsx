// ContactList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../Redux/action';
import { fetchContacts } from '../Redux/api';
// import { fetchContacts } from './api';
// import { setContacts } from './actions';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContacts();
      dispatch(setContacts(data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}
            {contact.phone}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
