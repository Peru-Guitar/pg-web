import Link from "next/link";
import { POST_CATEGORIES } from "@/content/categories";
import { PostCategory } from "@/content/types";

export const CategoryTag = ({ category }: { category: PostCategory }) => (
  <Link
    href={`/blog/categoria/${category}`}
    className="inline-block rounded-pill bg-brand-soft px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-brand-strong"
  >
    {POST_CATEGORIES[category].name}
  </Link>
);
