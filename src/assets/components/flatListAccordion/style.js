import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

export const AccordionItem = styled(List.Accordion)`
    width: 800px;
    background-color: #E8F2FF;
    margin-top: 10px;
    border-radius: 10px;
`;

export const ListItem = styled(List.Item)`
    width: 800px;
    background-color: #E8F2FF;
    margin-top: -10px;
`;

export const AccordionGroup = styled(List.AccordionGroup)`
    margin-top: 25%;
`;

export const ItemImage = styled(Avatar.Image)`
    background-color: white;
`;