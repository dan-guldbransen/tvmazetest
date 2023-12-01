import { Link } from 'react-router-dom';
import Star from '../../assets/icons/star.svg';

import { ICard } from '../../interfaces';
import './card.css';

const Card = ({ image, id, name, rating }: ICard) => {
  if (!image) {
    return null;
  }

  return (
    <Link className='card' to={`/show-details/${id}`}>
      <ul className='card-container' tabIndex={2}>
        <li className='card-image-container'>
          <img alt={name} src={image.medium} className='card-image' />
        </li>
        <li className='card-text'>
          <div className='card-name'>{name}</div>
          <div className='card-serie-rating-container'>
            <img src={Star} className='card-star' alt='star rating' />
            <p className='card-rating'>{rating.average}</p>
          </div>
        </li>
      </ul>
    </Link>
  );
};

export default Card;
