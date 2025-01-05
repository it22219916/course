import VideoCard from "@/app/ui/video";
import WordwallCard from "@/app/ui/wordwall";

const QuizPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <br />
      <br />
      <br />
      <div className="text-5xl font-bold text-center bg-gray-100">
        Lesson 01
      </div>
      <br />
      <br />
      <br />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <VideoCard
          title="Responsive Video Card for All Screens"
          videoUrl="https://www.youtube.com/embed/cGFEJxYdfFU?si=cKoP9MNAjxZqzkku" // Replace with your video link
        />
      </div>
      <br />
      <br />
      <br />
      <div className="text-2xl text-center my-4 bg-gray-100">
        Watch the video and do the following quiz.
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <WordwallCard quizUrl="https://wordwall.net/play/84373/793/580" />
      </div>
    </div>
  );
};

export default QuizPage;
