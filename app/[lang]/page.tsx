"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const { status } = useSession();

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-primary-700 p-4 md:h-52">
        <div className={`flex flex-row items-center leading-none text-white`}>
          <Icon
            icon="fluent-mdl2:learning-tools"
            className="h-12 w-12 rotate-[15deg] mr-3"
          />
          <p className="text-[44px]">Ebony Learning</p>
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />
          {lang === "en" ? (
            <p
              className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
            >
              <strong>Welcome to Ebony Learning.</strong> This is the employee
              training course, brought to you by Ebony Holdings.
            </p>
          ) : (
            <p
              className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
            >
              <strong>Ebony Learning වෙත සාදරයෙන් පිළිගනිමු.</strong> මෙය Ebony
              Holdings විසින් ඔබ වෙත ගෙන එන සේවකයන් පුහුණු කිරීමේ පාඨමාලාවයි.
            </p>
          )}
          {status === "authenticated" ? (
            <Link
              href={`${lang}/course`}
              className="flex items-center gap-5 self-start rounded-lg bg-primary-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-400 md:text-base"
            >
              <span>Course Page</span>{" "}
              <Icon icon="line-md:arrow-right" className="w-5 md:w-6" />
            </Link>
          ) : (
            <Link
              href={`${lang}/login`}
              className="flex items-center gap-5 self-start rounded-lg bg-primary-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-400 md:text-base"
            >
              <span>Log in</span>{" "}
              <Icon icon="line-md:arrow-right" className="w-5 md:w-6" />
            </Link>
          )}
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/Image.webp"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
