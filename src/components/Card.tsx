import { ImageProps } from "@/types";
import Link from "next/link";
import { StrapiImage } from "./StrapiImage";
import { formatDate } from "@/utils/format-date";

export interface CardProps {
  documentId: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  author:string;
  price?: number;
  startDate?: string;
  createdAt: string;
  basePath: string;
}

export function Card({
  title,
  description,
  slug,
  image,
  author,
  price,
  createdAt,
  startDate,
  basePath,
}: Readonly<CardProps>) {
  return (
    <Link
      href={`/${basePath}/${slug}`}
      className="block rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
    >
      {/* Image */}
      <div className="w-full h-64 relative">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "No alternative text provided"}
          className="w-full h-full object-cover"
          fill
        />
      </div>

      {/* Text content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {description.slice(0, 144)}...
        </p>

        {/* Author section */}
        <div className="flex items-center gap-3 mt-4">
          {/* Placeholder for Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            {/* Optional: Add profile image here if available */}
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            <span className="text-blue-600 font-medium block">{author}</span>
            <span className="text-gray-500 text-xs">
              {formatDate(startDate ?? createdAt)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
