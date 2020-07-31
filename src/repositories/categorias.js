import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados 😞 - e não faça isso em produção');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados 😞 - e não faça isso em produção');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
