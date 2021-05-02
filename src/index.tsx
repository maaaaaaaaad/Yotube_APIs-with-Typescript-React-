import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PopularVideos from "./components/service/popularVideo";
import Search from "./components/service/search";

const mostPopularVideos = new PopularVideos(
  process.env.REACT_APP_YOUTUBE_API_KEY! as string
);

const searchVideos = new Search(
  process.env.REACT_APP_YOUTUBE_API_KEY! as string
);

ReactDOM.render(
  <React.StrictMode>
    <App mostVideos={mostPopularVideos} searchVideos={searchVideos} />
  </React.StrictMode>,
  document.getElementById("root")
);
