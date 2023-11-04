import { Link } from 'react-router-dom';
import Star from '../../assets/icons/star.svg';

import './card.css';

interface ICard {
  show: {
    id: number;
    name: string;
    rating: {
      average: number;
    };
    image: {
      medium: string;
    };
  };
}

const Card = ({ show: { id, name, image, rating } }: ICard) => {
  return (
    <Link className='card' to={`/show-details/${id}`}>
      <div className='card-container' key={id}>
        <img alt={name} src={image.medium} />
      </div>

      <div className='card-text'>
        <div className='card-name'>{name}</div>
        <div className='card-serie-rating-container'>
          <img src={Star} className='card-star' alt='star rating' />
          <p className='card-rating'>{rating.average}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
