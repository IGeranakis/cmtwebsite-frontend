'use client';

import { StickyMenuProps, AboutInfoProps } from "@/types";
import { StrapiImage } from "../StrapiImage";
import { useScrollSpy } from "@/utils/useScrollspy";

interface ExtendedStickyMenuProps extends StickyMenuProps {
  aboutInfoBlocks: AboutInfoProps[];
}

export function StickyMenuBlock({
  logo,
  navigation,
  aboutInfoBlocks,
}: ExtendedStickyMenuProps) {
  const sectionIds = aboutInfoBlocks
    .map((info) =>
      info.heading ? info.heading.toLowerCase().replace(/\s+/g, "-") : null
    )
    .filter(Boolean) as string[];

  const activeId = useScrollSpy(sectionIds);

  return (
    <div className="sticky top-0 z-50 bg-white border-b shadow px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {logo?.image?.url && (
            <StrapiImage
              src={logo.image.url}
              alt={logo.image.alternativeText}
              width={200}
              height={200}
              className="object-contain"
            />
          )}
        </div>
      </div>

      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex gap-4 text-lg text-gray-700">
          {navigation?.map((item) => (
            <a key={item.id} href={item.href}>
              {item.text}
            </a>
          ))}
          |

          {/* Scrollspy links */}
          {aboutInfoBlocks.map((info) => {
            const id = info.heading?.toLowerCase().replace(/\s+/g, "-") ?? "";
            const isActive = id === activeId;
            return (
              <a
                key={info.id}
                href={`#${id}`}
                className={`transition-colors duration-300 ${
                  isActive ? "text-red-500 font-semibold" : ""
                }`}
              >
                {info.heading}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
