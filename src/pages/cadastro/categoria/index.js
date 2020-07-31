import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // PUXA A URL PARA CARREGAR OS DADOS E ENTRE O RESULTADO
    // compara pra ver se está rodando local para ter um banco de testes
    // por ser variável de ambiente deve ser toda maiúscula
    const URL_BASE = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://alura-flix-aleguarita.herokuapp.com/categorias';
    fetch(URL_BASE)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma categoria',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 1,
    //       nome: 'Outro valor',
    //       descricao: 'Uma categoria',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000 );
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        style={{ backgroundColor: values.cor }}
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);

          clearForm({ valoresIniciais });
        }}
      >

        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {/* Enquanto não houver valores em categoria, exibe uma msg de carregando */}
      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
