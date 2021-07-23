import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests.js';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Row  title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/> {/*  isLargeRow = {true} */}
      <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated }/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
      <Row title="Comed Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
