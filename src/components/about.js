import React from 'react';
import content from './content';
import { Container } from './Container.style';
import Card from './Card';

const about = () => {
  return <div>
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
  </div>;
};

export default about;
