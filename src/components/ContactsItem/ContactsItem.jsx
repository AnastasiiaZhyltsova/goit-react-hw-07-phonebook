import style from './ContactsItem.module.css';
import { useDeleteContactMutation } from '../../redux/contactsSlice';

export const ContactsItem = ({ contact }) => {
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteContactMutation();

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
        Delete
      </button>
    </li>
  );
};
