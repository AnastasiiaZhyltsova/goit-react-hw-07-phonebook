import { useState } from 'react';
import style from './Form.module.css';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsSlice';

function Form() {
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

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
          {' '}
          Add contact
        </button>
      </div>
    </form>
  );
}
// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
export default Form;

//  import { useState } from 'react';
// import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
// import {
//   useCreateContactMutation,
//   useFetchContactsQuery,
// } from '../../redux/contactsSlice';
// import style from './Form.module.css';

// // import { nanoid } from 'nanoid';

// const initialValues = {
//   name: '',
//   number: '',
// };
// function Form({ onSubmit }) {
//   // const [createContact, { isLoading, isSuccess }] = useCreateContactMutation();
//   const { data: contacts } = useFetchContactsQuery();

//   // const [name, setName] = useState('');
//   // const [number, setNumber] = useState('');

//   // берем данные value каждого input
//   // const handleChange = evt => {
//   //   const { name, value } = evt.currentTarget;
//   //   switch (name) {
//   //     case 'name':
//   //       setName(value);
//   //       break;
//   //     case 'number':
//   //       setNumber(value);
//   //       break;
//   //     default:
//   //       break;
//   //   }
//   // };
//   // MIN 40
//   //  const handleSubmit = async (values) => {
//   //       await onSubmit(values);
//   //       actions.setSubmitting(false);
//   //       actions.resetForm();
//   //   };

//   const formSubmitHandler = values => {
//     const normalzeName = values.name.toLocaleLowerCase();

//     contacts.find(contact => contact.name.toLocaleLowerCase() === normalzeName)
//       ? alert(`${values.name} is already in contacts`)
//       : createContact(values);
//   };
//   // сабмит формы
//   const handleSubmit = e => {
//     e.preventDefault();
//     formSubmitHandler(contact);
//     // reset();
//     console.log(this.state);
//   };
//   // обновление полей инпутов после нажатия сабмит
//   // const reset = () => {
//   //   setName('');
//   //   setNumber('');
//   // };

//   return (
//     <form initialValues={initialValues} onSubmit={handleSubmit}>
//       <label className={style.label}>
//         <span>Name</span>
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           // onChange={handleChange}
//           className={style.input}
//         />
//       </label>
//       <label className={style.label}>
//         <span>Number</span>
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={number}
//           // onChange={handleChange}
//           className={style.input}
//         />
//       </label>
//       <div className={style.buttonDiv}>
//         <button type="submit" className={style.button}>
//           {' '}
//           Add contact
//         </button>
//       </div>
//     </form>
//   );
// }
// // Form.propTypes = {
// //   onSubmit: PropTypes.func.isRequired,
// // };
// export default Form;
