import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Header({ name }) {
  const { data: session, status } = useSession();

  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl dark:text-white text-center mb-6">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>

      <div className="flex items-center justify-center">
        {status === 'loading' && <p className="opacity-60">Carregando...</p>}

        {status === 'unauthenticated' && (
          <button
            onClick={() => signIn('github')}
            className="bg-gray-800 dark:bg-white dark:text-black text-white px-5 py-2 rounded-full font-bold hover:opacity-80 transition"
          >
            Login com GitHub
          </button>
        )}

        {status === 'authenticated' && session?.user && (
          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800/50 px-5 py-2 rounded-full">
            <img
              src={session.user.image}
              alt={`Foto de ${session.user.name}`}
              className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600"
            />
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold dark:text-white leading-tight">
                {session.user.name}
              </span>
              <button
                onClick={() => signOut()}
                className="text-xs text-red-500 hover:text-red-700 dark:hover:text-red-400 font-bold uppercase tracking-wider transition"
              >
                Sair
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
