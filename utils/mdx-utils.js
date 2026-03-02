import { api } from '../services/api';

export const getPosts = async () => {
  try {
    const { data } = await api.get('/posts');

    if (data) {
      return data;
    }

    return [];
  } catch (error) {
    console.error('Erro ao buscar a lista de posts:', error);
    return [];
  }
};

export const getPostBySlug = async (id) => {
  try {
    const { data } = await api.get(`/posts?id=eq.${id}`);

    if (data && data.length > 0) {
      return data[0];
    }

    return {};
  } catch (error) {
    console.error('Erro ao buscar o post específico:', error);
    return {};
  }
};
