import type { MilestonesBlockProps } from "@/types";

export function MilestoneBlock({ title, description, heading, milestones }: MilestonesBlockProps) {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left section: Title + description */}
        <div className="max-w-sm">
          <p className="text-xl font-semibold text-gray-900 mt-2">{heading}</p>
        </div>

        {/* Right section: Milestones */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {milestones.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold text-gray-900">
                {item.value}
                <span className="text-blue-400">+</span>
              </h3>
              <p className="text-sm text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
