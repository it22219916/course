"use client";

import React, { useEffect, useState, use } from "react";
import LessonCard from "@/app/ui/lesson";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

const CoursePage: React.FC<PageProps> = ({ params }) => {
  interface Lesson {
    _id: string;
    english: {
      title: string;
      description: string;
    };
    sinhala: {
      title: string;
      description: string;
    };
  }

  // Unwrap the params promise using `use()`
  const { lang } = use(params);

  const [lessons, setLessons] = useState<Lesson[]>([]);

  const apiUrl = process.env.API_URL;

  useEffect(() => {
    const fetchLessons = async () => {
      const response = await fetch(`${apiUrl}/api/lessons`);
      const data = await response.json();
      setLessons(data);
    };

    fetchLessons();
  }, []); // No dependency on `lang` since lessons are fetched once.

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Dynamic title */}
      <h1 className="text-2xl font-bold mb-6">
        {lang === "en" ? "Course Page" : "පාඨමාලා පිටුව"}
      </h1>

      {/* Lessons grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson._id}
            id={lesson._id}
            title={lang === "en" ? lesson.english.title : lesson.sinhala.title}
            description={
              lang === "en"
                ? lesson.english.description
                : lesson.sinhala.description
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
