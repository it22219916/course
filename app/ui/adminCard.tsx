import { Icon } from "@iconify/react";

const AdminCard: React.FC<{
  icon: string;
  title: string;
  value: number;
}> = ({ icon, title, value }) => {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="text-indigo-500 w-12 h-12 mb-3 inline-block"
          viewBox="0 0 24 24"
        >
          <Icon icon={icon} />
        </svg>
        <h2 className="title-font font-medium text-3xl text-gray-900">
          {value}
        </h2>
        <p className="leading-relaxed">{title}</p>
      </div>
    </div>
  );
};

export default AdminCard;
