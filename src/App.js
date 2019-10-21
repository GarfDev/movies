import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movie from "./component/Movie";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import ReactModal from 'react-modal';
import YouTube from '@u-wave/react-youtube';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTrailerId, setModalTrailerId] = useState("");

  const [film, getFilm] = useState([]);
  const [genre, getGenre] = useState([]);
  const [allMovie, getAllMovie] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [ratingVal, setRatingVal] = useState({ min: 0, max: 10 });
  const getData = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?page=${pageNum}&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=4c5b4a5e627748117d4b24082672a9b4`;
    const response = await fetch(url);
    const data = await response.json();
    const newMovieData = film.concat(data.results);
    setPageNum(pageNum + 1);
    getFilm(newMovieData);
    getAllMovie(newMovieData);
  };


  const getGenres = async () => {
    const url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=4c5b4a5e627748117d4b24082672a9b4&language=en-US";
    const response = await fetch(url);
    const data = await response.json();
    getGenre(data.genres);
  };
  useEffect(() => {
    getData();
    getGenres();
  }, []);

  const handelModal = (id) => {
    getTrailer(id)
    console.log(modalTrailerId)
    setModalOpen(true)
    }

  const getTrailer = async (id) => {
      const response  = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a3bab0e1a8803be8f21fc84e04666349`)
      const data = await response.json()
      setModalTrailerId(data.results[0].key)
  }

  const whatGenre = id => {
    return genre.find(g => {
      if (g.id === id) return g;
    });
  };
  // let [oldValue, getOldValue] = useState(0);
  const filmGenre = value => {
    if (value === 0) {
      getFilm(allMovie);
      return;
    }
    const newFilm = allMovie.filter(f => {
      if (f.genre_ids.includes(value)) return true;
      return false;
    });
    getFilm(newFilm);
    // getOldValue(value);
  };
  // const getMoreSameGenre = () => {
  //   getData();
  // };
  const onRatingSliderChange = val => {
    const newMovies = allMovie.filter(movie => {
      const isAboveMinimumRating = movie.vote_average > val.min;
      const isBelowMaximumRating = movie.vote_average < val.max;
      // filmGenre(oldValue);
      return isAboveMinimumRating && isBelowMaximumRating;
    });
    getFilm(newMovies);
    setRatingVal(val);
  };
  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          VuFlix
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active" onClick={() => filmGenre(0)}>
              <a className="nav-link" href="#">
                All <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(28)}>
              <a className="nav-link" href="#">
                Action
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(12)}>
              <a className="nav-link" href="#">
                Adventure
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(16)}>
              <a className="nav-link" href="#">
                Animation
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(35)}>
              <a className="nav-link" href="#">
                Codemy
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(80)}>
              <a className="nav-link" href="#">
                Crime
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(99)}>
              <a className="nav-link" href="#">
                Documentary
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(18)}>
              <a className="nav-link" href="#">
                Drama
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(10751)}>
              <a className="nav-link" href="#">
                Family
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(14)}>
              <a className="nav-link" href="#">
                Fantasy
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(36)}>
              <a className="nav-link" href="#">
                History
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(27)}>
              <a className="nav-link" href="#">
                Horror
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(10402)}>
              <a className="nav-link" href="#">
                Music
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(9648)}>
              <a className="nav-link" href="#">
                Mystery
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(10749)}>
              <a className="nav-link" href="#">
                Romance
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(878)}>
              <a className="nav-link" href="#">
                Science Fiction
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(10770)}>
              <a className="nav-link" href="#">
                Tv Movie
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(53)}>
              <a className="nav-link" href="#">
                Thriller
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(10752)}>
              <a className="nav-link" href="#">
                War
              </a>
            </li>
            <li className="nav-item" onClick={() => filmGenre(37)}>
              <a className="nav-link" href="#">
                Western
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="range container-fluid">
        <InputRange
          maxValue={10}
          minValue={0}
          value={ratingVal}
          onChange={value => onRatingSliderChange(value)}
        />
        Rating
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {film.map((movie, i) => {
              return (
                <Movie
                  handelModal = {handelModal}
                  id = {movie.id}
                  key={movie.title + i}
                  imgURL={movie.poster_path}
                  title={movie.title}
                  des={movie.overview}
                  Ratings={movie.vote_average}
                  Vote={movie.vote_count}
                  popularity={movie.popularity}
                  release_date={movie.release_date}
                  genreName={movie.genre_ids.map(g => {
                    return whatGenre(g) && whatGenre(g).name;
                  })}
                />
              );
            })}
          </div>
        </div>
      </div>
      <button
        style={{ marginLeft: "50%", width: "200px" }}
        onClick={() => {
          getData();
        }}
        type="button"
        className="btn btn-success btn-lg"
      >
        Get More
      </button>
        <ReactModal style={{border:'null'}} closeTimeoutMS={2000} isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
          {(modalOpen === true) ? <YouTube video={`${modalTrailerId}`} autoplay width="100%" height="99%"/> : ""}
        </ReactModal>
    </div>
  );
}

export default App;
