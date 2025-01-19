"use client";

import React, { FC } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  path: string;
  icon: string;
}

export const navData: NavLink[] = [
  { name: "Home", path: "", icon: "ic:round-home" },
  {
    name: "Course",
    path: "course",
    icon: "streamline:class-lesson-solid",
  },
  { name: "Users", path: "users", icon: "mdi:user" },
];

const Nav: FC = () => {
  const pathname = usePathname();
  const currLang = pathname.split("/")[1];

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname.split("/")[3] && "text-primary-500"
              } ${
                link.path === "" &&
                pathname.split("/")[3] == null &&
                "text-primary-500"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={`/${currLang}/admin/${link.path}`}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* icon */}
              <div>
                <Icon icon={`${link.icon}`} />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
