import React from "react";

const QuizPage: React.FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0UqhP8zOwX8?si=oGPF42sSmKx36SNT"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
      <div className="flex justify-center h-screen">
        <iframe
          className="max-w-full rounded-lg shadow-lg"
          src="https://wordwall.net/play/84373/793/580"
          width="500"
          height="380"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default QuizPage;
