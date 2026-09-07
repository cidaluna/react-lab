import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4"> 
      <main className="flex flex-col items-center"> {/* Adicionado flex-col e items-center */}
        <ol className="list-inside list-decimal mb-6"> {/* Adicionado margem inferior */}
          <li>
            <Link className="underline" href="/nivel-0">
            Aula 2 - Nível 0
            </Link>
          </li>
          <li>
            <Link className="underline" href="/nivel-1">
            Aula 2 - Nível 1
            </Link>
          </li>
          <li>
            <Link className="underline" href="/nivel-2">
            Aula 2 - Nível 2
            </Link>
          </li>
          <li>
            <Link className="underline" href="/aula-3/server-side">
            Aula 3 - Server-side
            </Link>
          </li>
          <li>
            <Link className="underline" href="/aula-3/client-side">
            Aula 3 - Client-side
            </Link>
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Fundamentos de Front-End com React</p>
      </footer>
    </div>
  );
}