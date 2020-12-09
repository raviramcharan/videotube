import axios from "axios";

const KEY = "AIzaSyAOxBb1Qq5C6zo2ugSn9qL_sfdEqg0AHEs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
