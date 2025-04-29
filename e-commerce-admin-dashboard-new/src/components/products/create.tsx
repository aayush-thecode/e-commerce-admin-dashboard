'use client'

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "@/api/product";
import { CreateProduct } from "@/interface/auth/product.interface";
import toast from "react-hot-toast";

const CreateNewProduct = () => {
  const [formData, setFormData] = useState<CreateProduct>({
    name: "",
    price: "",
    coverImage: "",
    description: "",
    images: [],
  });

  const { mutate, status } = useMutation({
    mutationFn: createProduct,
    onSuccess(data) {
      toast.success(data.message || "Product created successfully!");
      setFormData({
        name: "",
        price: "",
        coverImage: "",
        description: "",
        images: [],
      });
    },
    onError(error: any) {
      toast.error(error?.message || "Failed to create product");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Product Name</label>
        <input
          id="name"
          name="name"
          placeholder="Enter product name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium">Price</label>
        <input
          id="price"
          name="price"
          placeholder="Enter product price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="coverImage" className="block text-sm font-medium">Cover Image URL</label>
        <input
          id="coverImage"
          name="coverImage"
          placeholder="https://example.com/image.jpg"
          value={formData.coverImage}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Product description..."
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <button
        type="submit"
        disabled={status === "pending"}  // Disable button while mutation is pending
        className="bg-orange-600 text-white px-4 py-2 rounded"
      >
        {status === "pending" ? "Creating..." : "Create Product"}
      </button>
    </form>
  );
};

export default CreateNewProduct;
