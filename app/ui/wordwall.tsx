const WordwallCard: React.FC<{ quizUrl: string }> = ({ quizUrl }) => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-4">
      <div
        className="relative"
        style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
      >
        <iframe
          src={quizUrl}
          frameBorder="0"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default WordwallCard;
