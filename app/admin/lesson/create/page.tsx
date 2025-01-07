"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateLessonPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    englishTitle: "",
    englishDescription: "",
    englishVideoUrl: "",
    englishQuizUrl: "",
    sinhalaTitle: "",
    sinhalaDescription: "",
    sinhalaVideoUrl: "",
    sinhalaQuizUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        english: {
          title: form.englishTitle,
          description: form.englishDescription,
          videoUrl: form.englishVideoUrl,
          quizUrl: form.englishQuizUrl,
        },
        sinhala: {
          title: form.sinhalaTitle,
          description: form.sinhalaDescription,
          videoUrl: form.sinhalaVideoUrl,
          quizUrl: form.sinhalaQuizUrl,
        },
      }),
    };
    const apiUrl = process.env.API_URL;
    const response = await fetch(`/api/lessons`, req);

    console.log(req.body);

    if (response.ok) {
      router.push("/lessons");
    } else {
      console.error("Failed to create lesson");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Create Lesson</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              English Title
            </label>
            <input
              type="text"
              name="englishTitle"
              value={form.englishTitle}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              English Description
            </label>
            <textarea
              name="englishDescription"
              value={form.englishDescription}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              English Video URL
            </label>
            <input
              type="text"
              name="englishVideoUrl"
              value={form.englishVideoUrl}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              English Quiz URL
            </label>
            <input
              type="text"
              name="englishQuizUrl"
              value={form.englishQuizUrl}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sinhala Title
            </label>
            <input
              type="text"
              name="sinhalaTitle"
              value={form.sinhalaTitle}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sinhala Description
            </label>
            <textarea
              name="sinhalaDescription"
              value={form.sinhalaDescription}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sinhala Video URL
            </label>
            <input
              type="text"
              name="sinhalaVideoUrl"
              value={form.sinhalaVideoUrl}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sinhala Quiz URL
            </label>
            <input
              type="text"
              name="sinhalaQuizUrl"
              value={form.sinhalaQuizUrl}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Lesson
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateLessonPage;
