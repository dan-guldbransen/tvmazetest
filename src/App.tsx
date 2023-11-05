import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import CardList from './components/card-list/CardList';
import ShowDetails from './components/show-details/ShowDetails';

import './app.css';

const App = () => {
  const [shows, setShows] = useState<any>([]);
  const [searchField, setSearchField] = useState<string>('');
  const [filteredShows, setFilteredShows] = useState<any>(shows);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((users) => setShows(users));
  }, []);

  useEffect(() => {
    const newFilteredShows = shows.filter((shows: { name: string }) => {
      return shows.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredShows(newFilteredShows);
  }, [shows, searchField]);

  const onSearchChange = (e: { target: { value: string } }) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <CardList onSearchChange={onSearchChange} shows={filteredShows} />
          }
        />
        <Route
          path='/show-details/:id'
          element={<ShowDetails shows={shows} />}
        />
        <Route path='*' element={<h2>Not Found</h2>} />;
      </Routes>
    </>
  );
};

export default App;
