"use client";

import React, { useEffect, useState } from "react";
import LessonCard from "@/app/ui/lesson";

const CoursePage = () => {
  interface Lesson {
    _id: string;
    english: {
      title: string;
      description: string;
    };
  }

  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    const fetchLessons = async () => {
      const response = await fetch("/api/lessons");
      const data = await response.json();
      setLessons(data);
    };

    fetchLessons();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Course Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson._id}
            id={lesson._id}
            title={lesson.english.title}
            description={lesson.english.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
