import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetdoDoVideo) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetdoDoVideo),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados 😞 - e não faça isso em produção');
    });
}

export default {
  create,
};
