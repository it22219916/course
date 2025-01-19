"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  const showSession = () => {
    return (
      <>
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            ඔබේ භාෂාව තෝරා ගන්න
          </h5>
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Choose your language
          </h5>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <Link
              href="/si"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <div className="text-left rtl:text-right">
                <div className="-mt-1 font-sans text-sm font-semibold">
                  සිංහල
                </div>
              </div>
            </Link>
            <Link
              href="/en"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <div className="text-left rtl:text-right">
                <div className="-mt-1 font-sans text-sm font-semibold">
                  English
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="text-gray-500 dark:text-gray-400">
          If you&apos;re a admin login{" "}
          <span>
            <Link
              href={`/${lang}/login`}
              className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            >
              here
            </Link>
          </span>
        </div>
      </>
    );
  };
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center min-h-screen">
        {showSession()}
      </div>
    </main>
  );
}
