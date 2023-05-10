import css from './Filter.module.css';
import PropTypes from 'prop-types';
//import css from '../contactForm/ContactForm.module.css';

export const Filter = ({ handleChangeFilter, filter }) => {
  return (
    <div className={css.book}>
      <h2 className={css.text}>Contacts</h2>
      <label>
        <p className={css.find}>Find contacts by name</p>
        <input
          className={css.input}
          name="filter"
          type="text"
          value={filter}
          onChange={handleChangeFilter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};
