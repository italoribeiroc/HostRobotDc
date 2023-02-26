import { Avatar, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="leaf" />;

const ItemCardapio = (props) => {
  return (
    <Card style={{ backgroundColor: '#E8F2FF' }}>
      <Card.Title title={props.title} subtitle={props.subtitle} left={props.icon}/>
      <Card.Content>
        <Text variant="bodyMedium">{props.content}</Text>
      </Card.Content>
    </Card>
  )
}

export default ItemCardapio;