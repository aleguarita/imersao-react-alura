import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'; descricao: 'valor'
      // colocar entre colchete indica que a chave é dinâmica
    });
  }

  function handleChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value,
    );
  }

  useEffect(() => {
    // PUXA A URL PARA CARREGAR OS DADOS E ENTRE O RESULTADO
    const URL_BASE = 'http://localhost:8080/categorias';
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

          setValues({ valoresIniciais });
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
        </div>)
      }

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
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
