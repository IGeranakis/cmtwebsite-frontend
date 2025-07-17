"use client";

import type { FeaturesBlockProps } from "@/types";
import Link from "next/link";
import Image from "next/image";

export function FeaturesBlock({
  heading,
  description,
  cta,

}: FeaturesBlockProps) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Heading */}
        <div className="flex flex-col text-5xl font-bold leading-tight text-gray-900 tracking-tight">
          {heading.split(" ").map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </div>

        {/* Right: Description and CTA */}
        <div className="max-w-xl text-gray-600 text-lg space-y-6">
          <p>{description}</p>
          {cta?.href && (
            <Link
              href={cta.href}
              target={cta.isExternal ? "_blank" : "_self"}
              className="inline-block"
            >
              <div className="bg-black text-white px-6 py-3 text-sm rounded hover:bg-gray-800 inline-flex items-center">
                {cta.text}
                <span className="ml-2">→</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
