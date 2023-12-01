import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import CardList from './components/card-list/CardList';
import ShowDetails from './components/show-details/ShowDetails';

import { IShow } from './interfaces';
import './app.css';

const App = () => {
  const [shows, setShows] = useState<IShow[]>([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((shows: IShow[]) => setShows(shows));
  }, []);

  const onSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();

    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchFieldString}`
      );
      const data = await response.json();
      const newList = data.map((item: { show: IShow[] }) => item.show);

      if (response.ok) {
        setShows(newList);
      } else {
        console.error(
          `Error fetching search results. Status: ${response.status}`
        );
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className='app-container'>
      <Routes>
        <Route
          path='/'
          element={<CardList onSearchChange={onSearchChange} shows={shows} />}
        />
        <Route
          path='/show-details/:id'
          element={<ShowDetails shows={shows} />}
        />
        <Route path='*' element={<h2>Not Found</h2>} />
      </Routes>
    </div>
  );
};

export default App;
