import React, { useEffect, useState } from "react";
import "./App.css";
import PopularVideos from "./components/service/popularVideo";
import Search from "./components/service/search";
import UserSearch from "./components/UserSearch";

import VideoListData from "./components/VideoListData";
import Viewer from "./components/Viewer";

interface Props {
  mostVideos: PopularVideos;
  searchVideos: Search;
}

const App: React.FC<Props> = ({ mostVideos, searchVideos }) => {
  const [videos, setVideos] = useState([]);
  const [viewVideo, setViewVideo] = useState(null);

  const viewer = (selectedVideo: any) => {
    document.cookie = "safeCookie1=foo; SameSite=Lax";
    document.cookie = "safeCookie2=foo";
    document.cookie = "crossCookie=bar; SameSite=None; Secure";

    setViewVideo(selectedVideo.id);
  };

  useEffect(() => {
    mostVideos.mostVideos().then((data) => setVideos(data));
  }, [mostVideos]);

  const userTextValue = (userTextValue: string | number): void => {
    searchVideos
      .userVideo(userTextValue)
      .then((result) => setViewVideo(result! as any));
  };

  return (
    <div>
      <UserSearch userTextValue={userTextValue}></UserSearch>
      <VideoListData videos={videos} viewer={viewer}></VideoListData>
      {viewVideo ? <Viewer viewVideo={viewVideo}></Viewer> : "Null!"}
    </div>
  );
};

export default App;
