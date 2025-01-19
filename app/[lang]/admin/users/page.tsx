"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AdminUsersPage = () => {
  const router = useRouter();
  interface user {
    _id: string;
    epf: string;
    name: string;
    admin: boolean;
  }

  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`/api/users`);
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleUpdate = (id: string) => {
    router.push(`users/${id}/update`);
  };

  const handleDelete = async (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setUsers(users.filter((user) => user._id !== id));
      } else {
        console.error("Failed to delete user");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Users Page</h1>
      <div className="flex justify-end mb-4">
        <Link
          href={`users/create`}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Add New User to System
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Users</h2>
        <ul className="space-y-4 xl:mr-10">
          {users.map((user) => (
            <li
              key={user._id}
              className="flex justify-between items-center p-4 border rounded-lg"
            >
              <div>
                <h3 className="text-lg font-bold">{user.epf}</h3>
                <p>{user.name}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleUpdate(user._id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
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

export default AdminUsersPage;
