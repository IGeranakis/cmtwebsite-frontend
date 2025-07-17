"use client";
import Link from "next/link";
import { StrapiImage } from "../StrapiImage";
import type { FooterProps } from "@/types";

export function Footer({ data }: { data: FooterProps }) {
  if (!data) return null;

  const { logo, description,copyrightText,newsletterTitle, newsletterInputPlaceholder,newsletterButtonLabel, column, socialLink, bottomLink } = data;

  return (
    <footer className="bg-white text-gray-800 mt-16">
      <div className="bg-gradient-to-r from-blue-700 to-blue-300 px-6 py-16 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <h2 className="text-4xl font-bold">
            Want to start a <br /> project?
          </h2>
          <form className="space-y-4">
            <select className="w-full bg-transparent border-b border-white placeholder-white text-white outline-none">
              <option value="small" className="text-black">Small</option>
              <option value="medium" className="text-black">Medium</option>
              <option value="large" className="text-black">Large</option>
            </select>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-white placeholder-white text-white outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 font-semibold rounded shadow"
            >
              Let’s talk →
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div>
          {logo && (
            <StrapiImage
              src={logo.image.url}
              alt={logo.image.alternativeText || ""}
              width={120}
              height={60}
              className="mb-4"
            />
          )}
          <p className="text-sm text-gray-500 mb-4">
            {description}
          </p>
          <p className="text-xs text-gray-400">{copyrightText}</p>
        </div>

        {/* Columns */}
        {column?.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-blue-600 mb-2">{col.title}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
         {col.link?.map((l) => (
  l.href && (
    <li key={l.id}>
      <Link
        href={l.href}
        target={l.isExternal ? "_blank" : "_self"}
        className="hover:underline"
      >
        {l.text}
      </Link>
    </li>
  )
))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold text-blue-600 mb-2">{newsletterTitle}</h4>
          <input
            type="email"
            placeholder={newsletterInputPlaceholder}
            className="w-full border px-3 py-2 mb-2 rounded"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            {newsletterButtonLabel}
          </button>
          <div className="flex gap-4 mt-4 text-blue-600">
       {socialLink?.map((link) =>
  link.href ? (
    <Link
      key={link.id}
      href={link.href}
      target={link.isExternal ? "_blank" : "_self"}
      className="text-xl"
    >
      {link.text}
    </Link>
  ) : null
)}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between px-6 max-w-7xl mx-auto gap-4">
        {bottomLink?.map((item) =>
  item.href ? (
    <Link
      key={item.id}
      href={item.href}
      target={item.isExternal ? "_blank" : "_self"}
      className="flex items-center gap-2"
    >
      {item.text}
    </Link>
  ) : (
    <span key={item.id} className="flex items-center gap-2">
      {item.text}
    </span>
  )
)}
      </div>
    </footer>
  );
}
