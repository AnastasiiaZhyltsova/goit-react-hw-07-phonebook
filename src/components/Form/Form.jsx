import { useState } from 'react';
import style from './Form.module.css';
import { contactsSlice } from '../../redux';
import { Loader } from 'components/Loader/Loader';

function Form() {
  const [createContact, { isLoading }] =
    contactsSlice.useCreateContactMutation();
  const { data: contacts } = contactsSlice.useFetchContactsQuery();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // берем данные value каждого input
  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async e => {
    const contact = { name, phone };
    e.preventDefault();
    const normalzeName = contact.name.toLocaleLowerCase();
    if (contacts.find(item => item.name.toLocaleLowerCase() === normalzeName)) {
      return alert(`${contact.name} is already in contacts`);
    }
    await createContact(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={style.label}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          className={style.input}
        />
      </label>
      <label className={style.label}>
        <span>Number</span>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
          className={style.input}
        />
      </label>
      <div className={style.buttonDiv}>
        <button type="submit" className={style.button}>
          {isLoading ? <Loader /> : <div> Add contact</div>}
        </button>
      </div>
    </form>
  );
}
// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
export default Form;
