import Link from "next/link";

const LessonCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Link
      href="/lesson"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Link>
  );
};

export default LessonCard;
