import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../redux/filtersSlice';

import styles from './SearchBox.module.css';

const SearchBox = () => {
  const inputSearch = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  return (
    <label className={styles.searchField}>
      <span>Find Contacts by name</span>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        value={inputSearch}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
};

export default SearchBox;
