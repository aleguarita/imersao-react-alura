import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [ categorias, setCategorias ] = useState([]);
  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://youtu.be/hhQ3RtvmfEg',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
    setCategorias();
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('Vídeo Cadastrado com sucesso');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Endereço do Vídeo"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria do Vídeo"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
