import Logo from '../logo/Logo';

import './searchBox.css';

interface ISearchBox {
  placeholder?: string;
  onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

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
