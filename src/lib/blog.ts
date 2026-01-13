import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "blogs");

export interface MarkdownBlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  excerpt: string;
  thumbnail: string;
  content: string;
  featured?: boolean;
}

export function getBlogPosts(): MarkdownBlogPost[] {
  // Ensure directory exists
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        title: data.title,
        date: data.date,
        category: data.category,
        author: data.author,
        excerpt: data.excerpt,
        thumbnail: data.thumbnail,
        featured: data.featured || false,
      } as MarkdownBlogPost;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );
}

export function getBlogPostBySlug(slug: string): MarkdownBlogPost | null {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      category: data.category,
      author: data.author,
      excerpt: data.excerpt,
      thumbnail: data.thumbnail,
      featured: data.featured || false,
    } as MarkdownBlogPost;
  } catch (e) {
    return null;
  }
}

export function getBlogCategories(): string[] {
  const posts = getBlogPosts();
  const categories = new Set(posts.map((post) => post.category));
  return ["All", ...Array.from(categories)];
}
