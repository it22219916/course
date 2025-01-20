"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import Logo from "@/public/logo.png";
import { Session } from "next-auth";
import LanguageSwitcher from "@/app/ui/LanguageSwitcher";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import router from "next/router";

interface NavLink {
  name: string;
  path: string;
}

export const navData: NavLink[] = [
  { name: "Home", path: "" },
  {
    name: "Course",
    path: "course",
  },
  { name: "About", path: "about" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const currLang = pathname.split("/")[1];
  const { status, data } = useSession() as {
    status: string;
    data: Session;
  };

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          onClick={() => {
            signOut({ redirect: false });
            router.push(`/${currLang}`);
          }}
        >
          Sign Out
        </button>
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7">Loading...</span>;
    } else {
      return (
        <Link
          href={`/${currLang}/login`}
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >
          Log in
        </Link>
      );
    }
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href={`./`} className="flex items-center">
            <Image
              src={Logo}
              className="mr-3 h-6 w-auto sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Learning
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {/* Language Button */}
            <Icon icon="tabler:language" className="text-primary-700 text-lg" />
            <LanguageSwitcher />
            {/* Login/Sign Out Button */}
            {showSession()}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navData.map((link, index) => {
                return (
                  <Link
                    href={`/${currLang}/${link.path}`}
                    className={`${
                      link.path === pathname.split("/")[2] &&
                      " text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    } ${
                      link.path === "" &&
                      pathname.split("/")[2] == null &&
                      " text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    }block py-5 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                    key={index}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {data?.user.admin && (
                <li>
                  <Link
                    href={`/${currLang}/admin`}
                    className={`${
                      pathname.split("/")[2] == "admin" && "text-white"
                    } relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-primary-400 to-primary-800 group-hover:from-primary-400 group-hover:to-primary-800 hover:text-white dark:text-white`}
                  >
                    <span
                      className={`${
                        pathname.split("/")[2] == "admin" && "bg-opacity-0"
                      } relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0`}
                    >
                      Admin
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
