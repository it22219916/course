"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AdminCoursePage = () => {
  const router = useRouter();
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
      const response = await fetch(`/api/lessons`);
      const data = await response.json();
      setLessons(data);
    };

    fetchLessons();
  }, []);

  const handleUpdate = (id: string) => {
    router.push(`/admin/lesson/${id}/update`);
  };

  const handleDelete = async (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this lesson?");
    if (confirmed) {
      const response = await fetch(`/api/lessons/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setLessons(lessons.filter((lesson) => lesson._id !== id));
      } else {
        console.error("Failed to delete lesson");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Course Page</h1>
      <div className="flex justify-end mb-4">
        <Link
          href="/admin/lesson/create"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Create New Lesson
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Lessons</h2>
        <ul className="space-y-4">
          {lessons.map((lesson) => (
            <li
              key={lesson._id}
              className="flex justify-between items-center p-4 border rounded-lg"
            >
              <div>
                <h3 className="text-lg font-bold">{lesson.english.title}</h3>
                <p>{lesson.english.description}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleUpdate(lesson._id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(lesson._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminCoursePage;
