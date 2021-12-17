import React from 'react';
import { Row } from '@components/Row';
import { data } from './data';

function App() {
  return (
    <section>
      {data.map((element) => (
        <Row key={element.id} todo={element} />
      ))}
    </section>
  )
}

export default App;
