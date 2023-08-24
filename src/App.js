// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import { Tab, Tabs, Box } from "@mui/material";
import {
  TopSongsApi,
  newSongsApi,
  genresApi,
  allSongsApi,
} from "./Components/Api/Api";
import { useEffect, useState, React } from "react";
// import Card from "./Components/Card/Card";
import Section from "./Components/Section/Section";
import styles from "./App.module.css";
import Accordian from "./Components/Accordian/Accordian";

function App() {
  const [data, setData] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [genres, setGenres] = useState([]);
  const [value, setValue] = useState("all");
  const [allSongs, setAllSongs] = useState([]);
  useEffect(() => {
    async function fetchTopSongs() {
      let res = await TopSongsApi();
      await setData(res.data);
      // console.log({ res });
    }
    fetchTopSongs();
    async function fetchNewSongs() {
      let res = await newSongsApi();
      await setNewAlbum(res.data);
      // console.log({ res });
    }
    fetchNewSongs();

    async function fetchGeneres() {
      let res = await genresApi();

      await setGenres(res.data.data);
    }
    fetchGeneres();
    async function fetchAllSongs() {
      let res = await allSongsApi();
      console.log({ res });
      await setAllSongs(res.data);
    }
    fetchAllSongs();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section title={"Top Albums"} type={"album"} data={data} />
        <Section title={"New Albums"} type={"album"} data={newAlbum} />

        <Section
          title={"Songs"}
          type={"songs"}
          data={
            value === ""
              ? allSongs
              : value === "all"
              ? allSongs
              : allSongs.filter((item) => item.genre.key === value)
          }
        >
          {value !== "" && (
            <Box sx={{ width: "100%", color: "#ffffff" }}>
              <Tabs
                value={value}
                onChange={(e, index) => {
                  setValue(index);
                  console.log({ index });
                }}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab
                  sx={{ color: "#ffffff" }}
                  value={"all"}
                  label={"All"}
                  key={"all"}
                />
                {genres.map((item) => (
                  <Tab
                    sx={{ color: "#ffffff" }}
                    value={item.key}
                    label={item.label}
                    key={item.key}
                  />
                ))}
                {/* <Tab value="one" label="Item One" />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" /> */}
              </Tabs>
            </Box>
          )}
        </Section>
      </div>
      <div className="accordianContainer">
        <h1>FAQs</h1>

        <Accordian />
      </div>

      {/* {data.slice(0, 1).map((i) => (
        <Card data={i} key={i.id} />
      ))} */}
    </div>
  );
}

export default App;
