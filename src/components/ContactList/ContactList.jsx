import React from 'react';
import style from './ContactList.module.css';
import { useFetchContactsQuery } from '../../redux/contactsSlice';

// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeItem, getItems, getFilter } from '../../redux/contactsSlice';

const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  console.log(contacts);

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
    // <div>Hi</div>
    <div>
      <ol className={style.contacts}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id} className={style.contact}>
            <p className={style.name}>{name} :</p>
            <p className={style.number}>{phone}</p>

            <button
              className={style.button}
              type="button"
              // onClick={() => onDeleteContact(id)}
              // onClick={() => dispatch(removeItem(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
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
