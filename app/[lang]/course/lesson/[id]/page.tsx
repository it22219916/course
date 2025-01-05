"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import VideoCard from "@/app/ui/video";
import WordwallCard from "@/app/ui/wordwall";
import { use } from "react";

interface LessonPageProps {
  params: Promise<{
    id: string;
    lang: string;
  }>;
}

const LessonPage: React.FC<LessonPageProps> = ({ params }) => {
  const router = useRouter();
  const { id, lang } = use(params);
  interface Lesson {
    english: {
      title: string;
      description: string;
      videoUrl: string;
      quizUrl: string;
    };
    sinhala: {
      title: string;
      description: string;
      videoUrl: string;
      quizUrl: string;
    };
  }

  const [lesson, setLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    const fetchLesson = async () => {
      const response = await fetch(`/api/lessons/${id}`);
      const data = await response.json();
      setLesson(data);
    };

    fetchLesson();
  }, [id]);

  if (!lesson) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100">
      <br />
      <br />
      <br />
      <div className="text-5xl font-bold text-center bg-gray-100">
        {lang == "en" ? lesson.english.title : lesson.sinhala.title}
      </div>
      <br />
      <br />
      <br />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <VideoCard
          title={
            lang == "en"
              ? lesson.english.description
              : lesson.sinhala.description
          }
          videoUrl={
            lang == "en" ? lesson.english.videoUrl : lesson.sinhala.videoUrl
          } // Replace with your video link
        />
      </div>
      <br />
      <br />
      <br />
      <div className="text-2xl text-center my-4 bg-gray-100">
        {lang == "en"
          ? "Watch the video and take the quiz below."
          : "වීඩියෝව නරඹා පහත ප්‍රශ්නාවලිය කරන්න."}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <WordwallCard
          quizUrl={
            lang == "en" ? lesson.english.quizUrl : lesson.sinhala.quizUrl
          }
        />
      </div>
    </div>
  );
};

export default LessonPage;
