const VideoCard: React.FC<{ title: string; videoUrl: string }> = ({
  title,
  videoUrl,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-4">
      <div
        className="relative"
        style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
      >
        <iframe
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      </div>
    </div>
  );
};

export default VideoCard;
