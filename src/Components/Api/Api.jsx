import axios from "axios";

const url = "https://qtify-backend-labs.crio.do";

export const TopSongsApi = async () => {
  let res = await axios.get(`${url}/albums/top`);
  //   console.log(res);
  return res;
};
