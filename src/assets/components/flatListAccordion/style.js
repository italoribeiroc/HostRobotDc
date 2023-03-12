import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

export const AccordionItem = styled(List.Accordion)`
    ${'' /* width: 38.9375rem; */}
    ${'' /* height: 4.5rem; */}
    background-color: #E8F2FF;
    ${'' /* margin-top: 0.625rem; */}
    border-radius: 10px;
`;

export const ListItem = styled(List.Item)`
    ${'' /* width: 38.9375rem; */}
    background-color: #E8F2FF;
`;

export const AccordionGroup = styled(List.AccordionGroup)`
    margin-top: 25%;
`;

export const ItemImage = styled(Avatar.Image)`
    background-color: white;
`;