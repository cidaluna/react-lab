"use client";

import { Post } from "@/app/types";
import useSWR from "swr";
import { fetcher } from "./fetchData";
import Link from "next/link";

export default function Blog() {
  const { data, error, isLoading } = useSWR("https://api.vercel.app/blog", fetcher);

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: { error.message } </div>

  return (
    <div>
      <Link
          href="/"
          className="inline-flex items-center gap-2 text-md font-medium text-gray-600 hover:text-black transition-colors mb-6"
        >
          ← Ir para a Home
      </Link>
      <ul>
        {
          data.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  );
}