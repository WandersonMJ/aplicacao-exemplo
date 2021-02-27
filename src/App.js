import React, { useState } from 'react';

import { Container, Texto, Butao } from './styles'

function App() {
  const [valor, setValor] = useState(1)
  const [valor2, setValor2] = useState(1)

  return (
    <Container>
      <Texto>{valor}</Texto>
      <Texto>{valor2}</Texto>

      <Butao onClick={function() {
        setValor(valor + 1)
        setValor2(valor2 + 2)
      }}>Click aqui</Butao>
    
    </Container> 
  );
}

export default App;
