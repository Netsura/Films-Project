import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchFilmsByPage } from './store/slices/filmsSlice'
import Header from './components/Header/Header';
import Homepage from './Pages/HomePage'
import FilmPage from './Pages/FilmPage'
import './App.css';

function App() {
  const dispatch = useDispatch()
  const {pageNumber} = useSelector((state) => state.filmsData)
  useEffect(() => {
    dispatch(fetchFilmsByPage(pageNumber))
  }, [pageNumber])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/film/:id' element={<FilmPage />} />
      </Routes>
    </div>
  );
}

export default App;
