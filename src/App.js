import "./App.css";
import { useEffect, useState } from "react";

import Player from "./components/Player";

function App() {

  const [songs] = useState([
    {
      title: "社內相親",
      artist: "禹智勳、朴世俊",
      img_src: "./images/burjkalifa.jpg",
      src: "./songs/love.mp3"
    },
    {
      title: "如果可以",
      artist: "王淨",
      img_src: "./images/nach-meri-rani.jpg",
      src: "./songs/moonold.mp3"
    },
    {
      title: "25_21",
      artist: "紫雨林",
      img_src: "./images/care-ni-karda.jpg",
      src: "./songs/2521.mp3"
    },
    {
      title: "39",
      artist: "崔有華",
      img_src: "./images/Ashnikko-Daisy.jpg",
      src: "./songs/39.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex, songs.length])

  return (
    <div className="App">
      <Player 
      currentSongIndex = { currentSongIndex}
      setCurrentSongIndex = { setCurrentSongIndex}
      nextSongIndex = {nextSongIndex}
      songs = {songs}
      />
    </div>
  );
}

export default App;
