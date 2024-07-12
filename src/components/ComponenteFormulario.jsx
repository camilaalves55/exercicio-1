import React, { useRef } from 'react';

const ComponenteFormulario = () => {
  const inputRef = useRef(null);

  const limparCampo = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();   
    }
  };

  return (
    <div className='forms'>
      <p>Componente de Formulário</p>
      <input type="text" ref={inputRef} placeholder=" Digite seu nome..."/>
      <button className='botao' onClick={limparCampo}>Limpar</button>
    </div>
  );
};

export default ComponenteFormulario;
