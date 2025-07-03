'use client';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useController, useFormContext } from 'react-hook-form';
import { X } from 'lucide-react'; // Optional: install lucide-react or use any icon

interface FileUploadProps {
  name: string;
  label?: string;
  multiple?: boolean;
  maxFiles?: number;
}

const FileUpload: React.FC<FileUploadProps> = ({
  name,
  label,
  multiple = false,
  maxFiles = 5,
}) => {
  const { control } = useFormContext();
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (multiple) {
        const newFiles = [...(value || []), ...acceptedFiles].slice(0, maxFiles);
        onChange(newFiles);
      } else {
        onChange(acceptedFiles[0]);
      }
    },
    [onChange, value, multiple, maxFiles]
  );

  const removeImage = (indexToRemove: number) => {
    if (multiple && Array.isArray(value)) {
      const updated = value.filter((_: File, i: number) => i !== indexToRemove);
      onChange(updated);
    } else {
      onChange(null);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    accept: {
      'image/*': [],
    },
  });

  const renderPreviews = () => {
    if (!value) return null;
    if (multiple && Array.isArray(value)) {
      return value.map((file: File, index: number) => (
        <div key={index} className="relative inline-block">
          <Image
            src={URL.createObjectURL(file)}
            alt={`preview-${index}`}
            height={100}
            width={100}
            className="w-24 h-24 object-cover rounded border"
          />
          <button
            type="button"
            onClick={() => removeImage(index)}
            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-800"
          >
            <X size={14} />
          </button>
        </div>
      ));
    } else if (value instanceof File) {
      return (
        <div className="relative inline-block">
          <Image
            src={URL.createObjectURL(value)}
            alt="cover"
            height={100}
            width={100}
            className="w-24 h-24 object-cover rounded border"
          />
          <button
            type="button"
            onClick={() => removeImage(0)}
            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-800"
          >
            <X size={14} />
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mb-4">
      {label && <label className="block mb-2 font-medium">{label}</label>}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded p-4 cursor-pointer text-center ${
          isDragActive ? 'border-orange-500' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag and drop {multiple ? 'images' : 'an image'} here, or click to select</p>
        )}
      </div>

      <div className="flex gap-2 mt-3 flex-wrap">{renderPreviews()}</div>

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default FileUpload;
