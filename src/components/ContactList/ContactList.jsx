import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/contactsSlice';

import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const inputSearch = useSelector(state => state.filters.name);

  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(inputSearch.toLowerCase())
  );

  const handleDeleteItem = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {visibleContacts.map(item => (
        <Contact
          key={item.id}
          name={item.name}
          phone={item.number}
          handleDelete={() => handleDeleteItem(item.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
