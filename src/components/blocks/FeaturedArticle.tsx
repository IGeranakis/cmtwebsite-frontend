"use client";

import type { FeaturedArticleProps } from "@/types";
import Link from "next/link";
import { StrapiImage } from "@/components/StrapiImage";
import ReactMarkdown from "react-markdown";

export function FeaturedArticle({
  headline,
  link,
  excerpt,
  image,
}: Readonly<FeaturedArticleProps>) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Top section: Heading + Description */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Insights & Advice from{" "}
          <span className="text-sky-500">Our team</span>
        </h2>
        <p className="mt-2 text-gray-500 max-w-3xl">
          Lorem ipsum dolor sit amet consectetur. Viverra velit sem pellentesque arcu vitae
          Ultricies mattis felis facilisis ultricies ut donec.
        </p>
      </div>

      {/* Featured article card */}
      <article className="relative w-full h-[300px] md:h-[380px] rounded overflow-hidden">
        <StrapiImage
        src={image.url}
        alt={image.alternativeText || "No alternative text provided"}
        height={200}
        width={300}
        priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm p-6 md:p-10 flex flex-col justify-between text-white">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold">
              <span className="text-sky-400">Article</span> of the Day
            </h3>

            <p className="text-sm font-semibold">
              {headline}{" "}
              {/* <span className="text-sky-400">Our team</span> */}
            </p>

            <div className="text-sm leading-relaxed text-gray-200">
              <ReactMarkdown>{excerpt}</ReactMarkdown>
            </div>
          </div>

          {/* Author and CTA */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gray-200" />
              <div className="text-xs">
                <p className="font-medium">Jon Doe</p>
                <p className="text-gray-400">05/05/2023</p>
              </div>
            </div>

            <Link
              href={link.href}
              className="bg-white text-black text-sm px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              {link.text} →
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
