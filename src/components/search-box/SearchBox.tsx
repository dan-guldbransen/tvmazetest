import Logo from '../logo/Logo';

import { ISearchBox } from '../../interfaces';
import './searchBox.css';

const SearchBox = ({ placeholder, onChangeHandler }: ISearchBox) => (
  <div className='search-box-container'>
    <div className='search-box-wrapper'>
      <Logo />
      <input
        className={'search-box'}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  </div>
);

export default SearchBox;
