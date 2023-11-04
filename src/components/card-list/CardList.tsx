import Card from '../card/Card';
import SearchBox from '../search-box/SearchBox';

import './cardList.css';

interface ICardList {
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  shows: {
    id: number;
    name: string;
    rating: {
      average: number;
    };
    image: {
      medium: string;
    };
  }[];
}

const CardList = ({ shows, onSearchChange }: ICardList) => (
  <>
    <SearchBox
      onChangeHandler={onSearchChange}
      placeholder='Search for TV shows'
    />
    <div className='card-list'>
      {shows.map((show) => {
        return <Card show={show} key={show.id} />;
      })}
    </div>
  </>
);

export default CardList;
