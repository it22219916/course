"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changeLanguage = (lang: string) => {
    const currentLang = pathname.split("/")[1];
    const newPathname = pathname.replace(`/${currentLang}`, `/${lang}`);
    router.push(`${newPathname}?${searchParams.toString()}`);
  };

  return (
    <div>
      <select
        className="text-gray-800 dark:text-white rounded-lg text-sm px-4 py-2.5 mr-2 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
        defaultValue={pathname.split("/")[1]}
        onChange={(e) => {
          const selectedLanguage = e.target.value;
          changeLanguage(selectedLanguage);
        }}
      >
        <option value="en">English</option>
        <option value="si">සිංහල</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
