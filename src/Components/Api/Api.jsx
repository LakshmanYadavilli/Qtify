import axios from "axios";

const url = "https://qtify-backend-labs.crio.do";

export const TopSongsApi = async () => {
  let res = await axios.get(`${url}/albums/top`);
  //   console.log(res);
  return res;
};

export const newSongsApi = async () => {
  let res = await axios.get(`${url}/albums/new`);
  return res;
};

export const genresApi = async () => {
  let res = await axios.get(`${url}/genres`);
  return res;
};

export const allSongsApi = async () => {
  let res = await axios.get(`${url}/songs`);
  return res;
};
