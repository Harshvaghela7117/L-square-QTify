import './App.css';
import Navbar from "./components/Navbar/Navbar"
import HeroSection from './components/Herosection/hero';
import CardCarousalTop from './components/CardCarousal/CardCarousalTop';
import {Outlet} from "react-router-dom";
import{ fetchNewAlbums, fetchSongs, fetchTopAlbums} from "./Api/api";
import { useEffect, useState } from 'react';


function App() {
const [searchData,setSearchData] = useState();
  const [data,setData] = useState({});

  const generateData = (key, source) => {
    source()
      .then((data) => {
        setData((prevData) => {
          return { ...prevData, [key]: data };
        });
      })
      .catch((error) => {
        console.error(`Error fetching ${key}:`, error);
      });
  };
  
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);
  
  
  const {topAlbums =[], newAlbums =[], songs = []}=data;
  return (
      <>
<div>
        <Navbar />
<Outlet context={{data:{topAlbums, newAlbums, songs}}}/>
        </div>
      </>
  );
}

export default App;
