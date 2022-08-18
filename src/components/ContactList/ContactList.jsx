import React from 'react';
import style from './ContactList.module.css';
import { useFetchContactsQuery } from '../../redux/contactsSlice';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();

  // const contacts = useSelector(getItems);
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();

  // const getContactsFilter = () => {
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalizedFilter)
  //   );
  // };
  // const contactsFilter = getContactsFilter();

  return (
    <div>
      {contacts && (
        <ol className={style.contacts}>
          {contacts.map(contact => (
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
