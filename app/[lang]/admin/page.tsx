"use client";

import Card from "@/app/ui/adminCard";
import { useEffect, useState } from "react";

interface UserCount {
  userCount: number;
  adminCount: number;
}

const AdminPage = () => {
  const [userCount, setUserCount] = useState<UserCount>({
    userCount: 0,
    adminCount: 0,
  });

  useEffect(() => {
    const fetchUserCount = async () => {
      const response = await fetch(`/api/users?type=count`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserCount(data);
      } else {
        console.error("Failed to fetch user count");
      }
    };

    console.log("User Count:", userCount);
    fetchUserCount();
  }, []);

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <Card
            icon="majesticons:users-line"
            title="Users"
            value={userCount.userCount}
          />
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
