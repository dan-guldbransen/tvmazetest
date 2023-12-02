import Card from '../card/Card';
import SearchBox from '../search-box/SearchBox';

import { ICardList } from '../../interfaces';
import './cardList.css';

const CardList = ({ shows, onSearchChange }: ICardList) => {
  return (
    <>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='Search for TV shows'
      />

      <div className='card-list'>
        {shows?.map((s, i) => (
          <Card key={i} {...s} />
        ))}
      </div>
    </>
  );
};

export default CardList;
