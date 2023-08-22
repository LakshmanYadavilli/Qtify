// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import { TopSongsApi } from "./Components/Api/Api";
import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchTopSongs() {
      let res = await TopSongsApi();
      await setData(res.data);
      console.log({ res });
    }
    fetchTopSongs();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {data.slice(0, 1).map((i) => (
        <Card data={i} key={i.id} />
      ))}
    </div>
  );
}

export default App;
