import Link from "next/link";
import { cn } from "@/lib/utils";
import { MarkdownBlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: MarkdownBlogPost;
  isHero?: boolean;
}

export function BlogCard({ post, isHero = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group block h-full rounded-[2rem] border border-slate-900 transition-all hover:bg-slate-50",
        isHero ? "gap-12 p-1 pt-1 lg:flex" : "p-8"
      )}
    >
      {/* Thumbnail Placeholder */}
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.8rem] bg-slate-100 shadow-inner",
          isHero
            ? "aspect-[16/9] lg:aspect-auto lg:flex-1"
            : "mb-8 aspect-[16/9]"
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center text-2xl font-black tracking-widest text-slate-300 uppercase">
          {post.category}
        </div>

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-emerald-600/0 transition-colors duration-500 group-hover:bg-emerald-600/5" />
      </div>

      <div
        className={cn(
          "flex flex-col",
          isHero ? "p-8 lg:flex-1 lg:py-12 lg:pr-12 lg:pl-0" : ""
        )}
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="text-[10px] font-black tracking-widest text-emerald-800 uppercase">
            {post.category}
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-200" />
          <span className="text-[10px] font-bold text-slate-500">
            {post.date}
          </span>
        </div>

        <h3
          className={cn(
            "leading-tight font-black tracking-tight text-slate-900 transition-colors group-hover:text-emerald-700",
            isHero ? "mb-6 text-4xl md:text-5xl" : "mb-4 text-2xl"
          )}
        >
          {post.title}
        </h3>

        <p
          className={cn(
            "line-clamp-2 leading-relaxed font-medium text-slate-600",
            isHero ? "mb-10 text-xl" : "text-base"
          )}
        >
          {post.excerpt}
        </p>

        {isHero && (
          <div className="mt-auto flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
              MF
            </div>
            <div>
              <p className="text-sm font-black text-slate-900">{post.author}</p>
              <p className="text-xs font-bold text-slate-400">Article Author</p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
