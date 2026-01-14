import { Metadata } from "next";
import { Navbar, Footer } from "@/components/common";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { getBlogPosts, getBlogCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "The Logic Lab | Sasswave Blog",
  description:
    "Deep dives into software engineering, mathematics, and digital productivity.",
};

export default function BlogArchivePage() {
  const posts = getBlogPosts();
  const categories = getBlogCategories();

  const featuredPost = posts.find((post) => post.featured) || posts[0];
  const otherPosts = posts.filter(
    (post) => post.slug !== (featuredPost?.slug || "")
  );

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white pt-20">
        <BlogHero />
        <section className="section border-y border-slate-100/50 bg-[#FAFBFD]">
          <div className="section-container">
            <div className="mb-16 flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-bold text-slate-500 transition-all hover:border-blue-600 hover:text-blue-600"
                >
                  {category}
                </button>
              ))}
            </div>

            {featuredPost && (
              <div className="mb-20">
                <BlogCard post={featuredPost} isHero={true} />
              </div>
            )}

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {posts.length === 0 && (
              <div className="py-20 text-center">
                <p className="font-bold text-slate-400">
                  No articles published yet. Check back soon.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
