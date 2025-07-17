"use client";

import { useState } from "react";
import type { ServicesAccordionBlockProps } from "@/types";
import { CiCirclePlus } from "react-icons/ci";
import { FaCircleMinus } from "react-icons/fa6";


export function ServicesAccordionBlock({ heading ,items }: ServicesAccordionBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-5xl font-bold mb-8">{heading}</h2>
      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <div
              key={item.id}
              className="border border-gray-300 rounded overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 font-medium text-lg flex justify-between items-center"
              >
                <span>{item.title}</span>
              <span className="text-xl transform transition-transform duration-300">
                {isOpen ? 
                <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">hello </h1>
                
                : <CiCirclePlus className="inline" />}
            </span>
              </button>
              {isOpen && (
                <div className="px-6 py-4 text-gray-700 bg-white">
                  {item.description}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
