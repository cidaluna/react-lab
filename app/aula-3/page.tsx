import Link from "next/link";

interface Post {
  id: number;
  title: string;
}

export default async function Page() {
  const response = await fetch("https://api.vercel.app/blog");
  const posts = await response.json();
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
        posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))
      }
    </ul>
    </div>
   
  );
}