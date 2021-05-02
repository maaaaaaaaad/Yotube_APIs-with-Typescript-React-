interface Props {
  viewVideo: string | null;
}

const Viewer: React.FC<Props> = ({ viewVideo }) => {
  return (
    <div>
      <iframe
        title="video"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${viewVideo}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Viewer;
