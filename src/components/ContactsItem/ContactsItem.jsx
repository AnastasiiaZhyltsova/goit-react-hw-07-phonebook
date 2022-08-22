import style from './ContactsItem.module.css';
import { contactsSlice } from '../../redux';
import { LoaderMini } from 'components/Loader/Loader';
export const ContactsItem = ({ contact }) => {
  const [deleteTodo, { isLoading: isDeleting }] =
    contactsSlice.useDeleteContactMutation();

  return (
    <li className={style.contact}>
      <p className={style.name}>{contact.name} :</p>
      <p className={style.number}>{contact.phone}</p>

      <button
        className={style.button}
        type="button"
        onClick={() => deleteTodo(contact.id)}
        disabled={isDeleting}
      >
        {isDeleting ? <LoaderMini /> : <span>Delete</span>}
      </button>
    </li>
  );
};
