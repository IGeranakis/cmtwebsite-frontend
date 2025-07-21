import { AboutInfoProps } from "@/types";
export function AboutInfo({
  title,
  content,
}: Readonly<AboutInfoProps>) {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24">
  <div className="w-full">
    {/* Title */}
    <h2 className="text-5xl font-bold text-gray-900 mb-6">
      {title}
    </h2>
 
    {/* Paragraph content */}
    <div className="text-gray-700 leading-relaxed space-y-4 ">
      {content}
    </div>
  </div>
</section>
 
  );
}