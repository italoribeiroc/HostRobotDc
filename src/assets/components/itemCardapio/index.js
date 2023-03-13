import { Card, Text } from 'react-native-paper';

const ItemCardapio = (props) => {
  return (
    <Card style={props.style}>
      <Card.Title title={props.title} subtitle={props.subtitle} left={props.icon} />
      <Card.Content>
        <Text variant="bodyMedium">{props.content}</Text>
      </Card.Content>
    </Card>
  )
}

export default ItemCardapio;