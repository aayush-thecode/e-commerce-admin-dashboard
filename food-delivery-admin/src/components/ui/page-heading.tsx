import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";

interface IProps {
  title: string;
  link?: string;
  buttonText?: string;
}

const PageHeading: React.FC<IProps> = ({ title, link = "/", buttonText }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6 py-4 bg-white shadow-sm rounded-xl mb-6">
      <h1 className="text-2xl md:text-3xl font-bold text-orange-600 tracking-wide">
        {title}
      </h1>

      {buttonText && (
        <Link href={link}>
          <button className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition font-semibold text-sm tracking-wide">
            <FiPlus className="text-lg" />
            {buttonText}
          </button>
        </Link>
      )}
    </div>
  );
};

export default PageHeading;
