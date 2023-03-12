import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const StyledCard = styled(Card)`
    width: 353px;
    background-color: '#FEFBFC';
`;

export const TouchableCard = styled.TouchableOpacity`
    
`;

export const StyledCover = styled(Card.Cover)`
    background-color: '#fff';
`;

export const StyledTitle = styled(Card.Title)`
    ${'' /* align-self: center; */}
    font-size: 28px;
`;