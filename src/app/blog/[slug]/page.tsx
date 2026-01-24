import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar, Footer } from "@/components/common";
import { ReadingProgressBar } from "@/components/blog/ReadingProgressBar";
import { AppCallout } from "@/components/blog/AppCallout";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ExportedImage from "next-image-export-optimizer";
import { ShareArticle } from "@/components/blog/ShareArticle";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | AppLass",
    };
  }

  return {
    title: `${post.title} | AppLass Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.thumbnail,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `https://applass.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.thumbnail,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AppLass",
      logo: {
        "@type": "ImageObject",
        url: "https://applass.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://applass.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgressBar />
      <Navbar />
      <main className="flex-1 bg-white pt-20">
        {/* Iridescent Header Section */}
        <header className="bg-iridescent relative border-b border-slate-100 py-20 lg:py-32">
          <div className="section-container relative z-10">
            <Link
              href="/blog"
              className="mb-12 inline-flex items-center gap-2 text-xs font-black tracking-widest text-blue-800 uppercase transition-transform hover:-translate-x-1"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Archive
            </Link>

            <div className="mb-8 flex items-center gap-3">
              <span className="rounded-full bg-emerald-500/10 px-4 py-1.5 text-[10px] font-black tracking-widest text-emerald-800 uppercase">
                {post.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-200" />
              <span className="text-[10px] font-bold text-slate-500">
                {post.date}
              </span>
            </div>

            <h1 className="mb-10 max-w-6xl text-8xl leading-[1.2] font-bold text-slate-900">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-black text-slate-900">
                  {post.author}
                </p>
                <p className="text-xs font-bold text-slate-500">
                  Article Author
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <section className="section group relative">
          <div className="section-container">
            <div className="flex flex-col gap-16 lg:flex-row">
              {/* Main Content */}
              <article className="lg:w-2/3">
                <div className="prose prose-slate prose-lg prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium prose-strong:text-slate-900 prose-strong:font-black prose-a:text-blue-600 prose-a:font-bold hover:prose-a:text-blue-700 prose-img:rounded-[2rem] prose-img:border prose-img:border-slate-100 max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      img: ({
                        src,
                        alt,
                        node: _node,
                        width,
                        height,
                        ...props
                      }) => {
                        if (!src) return null;
                        return (
                          <span className="relative my-12 block aspect-video overflow-hidden rounded-[2rem] border border-slate-100 shadow-xl">
                            <ExportedImage
                              src={src as string}
                              alt={alt || ""}
                              fill
                              className="object-cover"
                              {...props}
                            />
                          </span>
                        );
                      },
                    }}
                  >
                    {post.content || ""}
                  </ReactMarkdown>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:w-1/3">
                <div className="sticky top-32 flex flex-col gap-8">
                  <AppCallout appName="Mindful Guard" />
                  <AppCallout appName="FOMOgen" />
                  <ShareArticle title={post.title} slug={slug} />
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
