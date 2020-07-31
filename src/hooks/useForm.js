import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'; descricao: 'valor'
      // colocar entre colchete indica que a chave é dinâmica
    });
  }

  // Isso acima substitui o abaixo:
  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  };

  return {
    values,
    handleChange,
    clearForm,
  };
};

export default useForm;