import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout, { GradientBackground } from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';
import { api } from '../services/api';

export default function NovoPost({ globalData }) {
  const { status } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (status === 'loading')
    return <p className="text-center mt-20">Carregando...</p>;
  if (status === 'unauthenticated') {
    return (
      <Layout>
        <Header name={globalData.name} />
        <main className="w-full text-center mt-20 mb-32">
          <h1 className="text-3xl text-red-500 font-bold mb-4">
            Acesso Negado
          </h1>
          <p>Você precisa fazer login com o GitHub para criar um post.</p>
        </main>
        <Footer copyrightText={globalData.footerText} />
      </Layout>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await api.post('/posts', {
        title: title,
        description: description,
        body: body,
      });

      alert('Post publicado com sucesso!');
      router.push('/');
    } catch (error) {
      console.error('Erro ao criar post:', error);
      alert('Ocorreu um erro ao salvar o post.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title={`Novo Post - ${globalData.name}`}
        description="Área restrita para novos posts"
      />
      <Header name={globalData.name} />

      <main className="w-full max-w-3xl mx-auto mt-10 mb-20">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          Escrever Novo Post
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 p-8 rounded-lg"
        >
          <div className="flex flex-col gap-2">
            <label className="font-bold dark:text-white opacity-80">
              Título do Post
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 rounded-lg bg-transparent border border-gray-400 dark:border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Digite um título chamativo..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold dark:text-white opacity-80">
              Descrição / Resumo
            </label>
            <input
              type="text"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-3 rounded-lg bg-transparent border border-gray-400 dark:border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Sobre o que é este post?"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold dark:text-white opacity-80">
              Conteúdo Completo
            </label>
            <textarea
              required
              rows="8"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="p-3 rounded-lg bg-transparent border border-gray-400 dark:border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Escreva o seu texto aqui..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-gray-900 dark:bg-white dark:text-black text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-80 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Salvando no banco...' : 'Publicar Post'}
          </button>
        </form>
      </main>

      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export async function getServerSideProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
