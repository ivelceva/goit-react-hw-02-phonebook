import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contactSeach, deleteContact }) => {
  if (contactSeach.length === 0) {
    return <p className={css.message}>No contacts found.</p>;
  }

  return (
    <ul className={css.list}>
      {contactSeach.map(({ name, number, id }) => {
        return (
          <li className={css.user} key={id}>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
            <button
              className={css.btn}
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
    
  );
};

ContactList.propTypes = {
  contactSeach: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
