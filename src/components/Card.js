import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const RandomMealCard = () => (
  <Card>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
    <Card.Content>
      <Title>Card title</Title>
     
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default RandomMealCard;