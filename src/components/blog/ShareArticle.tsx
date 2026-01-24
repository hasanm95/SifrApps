"use client";

import { Twitter, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ShareArticleProps {
  title: string;
  slug: string;
}

export function ShareArticle({ title, slug }: ShareArticleProps) {
  const [copied, setCopied] = useState(false);
  const url = `https://applass.com/blog/${slug}`;

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-[2rem] border border-slate-100 bg-slate-50/50 p-8">
      <h4 className="mb-4 text-sm font-black tracking-widest text-slate-900 uppercase">
        Share Article
      </h4>
      <div className="flex gap-4">
        <button
          onClick={shareOnTwitter}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-blue-600 hover:text-blue-600"
          title="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-blue-600 hover:text-blue-600"
          title="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </button>
        <button
          onClick={copyToClipboard}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:border-blue-600 hover:text-blue-600",
            copied ? "border-green-500 text-green-500" : "text-slate-500"
          )}
          title="Copy Link"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Link2 className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
