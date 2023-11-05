import { useParams } from 'react-router-dom';
import Logo from '../logo/Logo';
import BackArrow from '../../assets/icons/back-arrow.svg';

import './showDetails.css';

interface IShowDetails {
  shows: {
    id: number;
    name: string;
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    genres: string[];
    officialSite: string;
    rating: {
      average: number;
    };
    premiered: string;
    language: string;
    network: {
      name: string;
    };
  }[];
}

const ShowDetails = ({ shows }: IShowDetails) => {
  const show = useParams();
  const currentShow = shows.find(
    (targetShow) => targetShow.id === Number(show.id)
  );

  return (
    <>
      <div className='show-details-header'>
        <Logo />

        <a href='/' className='show-back-button-link'>
          <div className='show-back-button'>
            <img src={BackArrow} alt='Back arrow' />
            <p className='show-back-button-text'>Back to search</p>
          </div>
        </a>
      </div>
      <div className='show-details-container'>
        <div className='show-details'>
          <div className='show-details-image-container'>
            <img alt={currentShow?.name} src={currentShow?.image.original} />
          </div>
          <div className='show-details-info'>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDetails;
