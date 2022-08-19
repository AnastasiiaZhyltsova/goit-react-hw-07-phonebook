import React from 'react';
import style from './ContactList.module.css';
import { useFetchContactsQuery } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filterValue = useSelector(getFilter);

  const getContactsFilter = () => {
    const normalizedFilter = filterValue.toLocaleLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizedFilter)
      )
    );
  };
  const contactsFilter = getContactsFilter();

  return (
    <div>
      {contacts && (
        <ol className={style.contacts}>
          {contactsFilter.map(contact => (
            <ContactsItem key={contact.id} contact={contact} />
          ))}
        </ol>
      )}
    </div>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
