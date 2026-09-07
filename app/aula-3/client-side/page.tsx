import { Suspense } from "react";
import Posts from "@/components/Posts";
import Link from "next/link";
import { Post } from "@/app/types";

const getPosts = async () => {
  const response = await fetch("https://api.vercel.app/blog");
  const posts: Post[] = await response.json();
  return posts;
}
 
export default function Page() {
  // Don't await the data fetching function
  const posts = getPosts();
 
  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-md font-medium text-gray-600 hover:text-black transition-colors mb-6"
      >
        ← Ir para a Home
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Posts posts={posts} />
      </Suspense>
    </div>
  );
}