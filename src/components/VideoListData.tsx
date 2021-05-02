import VideoListView from "./VideoListView";

interface Props {
  [x: string]: any;
  viewer: (items: any) => void;
}

const VideoListData: React.FC<Props> = ({ videos, viewer }) => {
  const VideoView = (items: any) => {
    viewer(items);
  };

  return (
    <div>
      <ul>
        {videos.map((items: any) => (
          <VideoListView
            key={items.id}
            items={items}
            title={items.snippet.title}
            thumbnails={items.snippet.thumbnails.default.url}
            description={items.snippet.description}
            VideoView={VideoView}
          ></VideoListView>
        ))}
      </ul>
    </div>
  );
};

export default VideoListData;
