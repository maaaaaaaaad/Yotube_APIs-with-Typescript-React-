import React, { useRef, useState } from "react";

interface Props {
  items: any;
  title: string;
  thumbnails: string;
  description: string;
  VideoView: (data: any) => void;
}

const VideoListView: React.FC<Props> = ({
  items,
  title,
  thumbnails,
  description,
  VideoView,
}) => {
  const [active, setActive] = useState(false);

  const divRef = useRef(null);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActive(!active);
  };

  const seletedVideo = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
    VideoView(items);
  };

  return (
    <li>
      <span>
        <button onClick={onClick} className="desBtn">
          {active ? "Close" : "Description"}
        </button>
        {title}
      </span>
      <img
        className="thumbnail"
        onClick={seletedVideo}
        src={thumbnails}
        alt="thumbnail"
      />
      <div
        ref={divRef}
        className={active ? "descriptionOpen" : "descriptionClose"}
      >
        {description}
      </div>
    </li>
  );
};

export default VideoListView;
