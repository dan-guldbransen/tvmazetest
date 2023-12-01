import { useParams } from 'react-router-dom';
import Logo from '../logo/Logo';
import BackArrow from '../../assets/icons/back-arrow.svg';

import { IShowDetails } from '../../interfaces';
import './showDetails.css';

const ShowDetails = ({ shows }: IShowDetails) => {
  const show = useParams();
  const currentShow = shows.find(
    (targetShow) => targetShow.id === Number(show.id)
  );

  console.log(currentShow);
  return (
    <>
      <div className='show-details-header'>
        <Logo />

        <a href='/' className='show-back-button-link'>
          <button className='show-back-button'>
            <img src={BackArrow} alt='Back arrow' />
            <p className='show-back-button-text'>Back to search</p>
          </button>
        </a>
      </div>

      <div className='show-details-container'>
        <ul className='show-details'>
          <li className='show-details-image-container'>
            <img
              alt={currentShow?.name}
              src={currentShow?.image.medium}
              className='show-details-image'
            />
          </li>
          <li className='show-details-info'>
            <h2 className='show-header-text'>{currentShow?.name}</h2>
            <p className='show-genre-text'>{currentShow?.genres.join(', ')}</p>
            <p className='show-summary'>{currentShow?.summary}</p>
            <p>
              {currentShow?.network
                ? `Rating: ${currentShow?.rating.average} / 10`
                : ''}
            </p>
            <p>
              {currentShow?.network
                ? `Network: ${currentShow?.network?.name}`
                : ''}
            </p>
            <p>
              {currentShow?.premiered
                ? `Premiered: ${currentShow?.premiered}`
                : ''}
            </p>
            <p>
              {currentShow?.language
                ? `Language: ${currentShow?.language}`
                : ''}
            </p>
            <a
              href={currentShow?.officialSite}
              className='show-details-link'
              target='blank'
            >
              {currentShow?.officialSite ? `${currentShow?.officialSite}` : ''}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShowDetails;
