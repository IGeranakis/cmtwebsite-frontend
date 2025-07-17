import { ArticleProps } from "@/types";
import { getContent } from "@/data/loaders";

interface ContentListProps {
  headline: string;
  query?: string;
  path: string;
  featured?: boolean;
  component: React.ComponentType<ArticleProps & { basePath: string }>;
  headlineAlignment?: "center" | "right" | "left";
}

async function loader(path: string ,featured?:boolean) {
  const { data } = await getContent(path,featured);
  return {
    articles: (data as ArticleProps[]) || [],
  };
}

export async function ContentList({
  headline,
  path,
  featured,
  component,
  headlineAlignment = "left",
}: Readonly<ContentListProps>) {
  const { articles } = await loader(path,featured);
  const Component = component;

  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[headlineAlignment];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10">
      {/* Headline */}
      <h3 className={`text-3xl font-bold mb-8 ${alignmentClass}`}>
        {headline || "Featured Articles"}
      </h3>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Component key={article.documentId} {...article} basePath={path} />
        ))}
      </div>
    </section>
  );
}
