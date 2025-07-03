import React from 'react';
import { IoTrashOutline } from "react-icons/io5";
import { VscEdit } from "react-icons/vsc";
import Link from 'next/link';

interface IProps {
  updateLink: string;
  handleDelete: () => void;
}

export const Actions: React.FC<IProps> = ({ updateLink, handleDelete }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      {/* Edit Button */}
      <Link href={updateLink} title="Edit">
        <button 
        title="Edit"
        className="p-2 rounded-full hover:bg-orange-100 transition">
          <VscEdit size={20} className="text-orange-600" />
        </button>
      </Link>

      {/* Delete Button */}
      <button
        title="Delete"
        onClick={handleDelete}
        className="p-2 rounded-full hover:bg-red-100 transition"
      >
        <IoTrashOutline size={20} className="text-red-500" />
      </button>
    </div>
  );
};
