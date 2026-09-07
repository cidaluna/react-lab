import { Post } from "@/app/types";
import Link from "next/link";


export default async function Page() {
  const response = await fetch("https://api.vercel.app/blog");
  const posts: Post[] = await response.json();
  console.log("Post 0: ", posts[0]); {/* para ver o tipo do id e quais demais campos existem na estrutura de cada objeto retornado */}
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
        posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))
      }
    </ul>
    </div>
   
  );
}