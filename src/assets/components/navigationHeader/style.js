import styled from "styled-components/native";
import { Appbar, IconButton } from "react-native-paper";

export const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 90%;
    background-color: '#fff';
    margin-bottom: 30px;
    padding-right: 190px;
    
`;

export const StyledBackAction = styled(IconButton)`
    width: 128px;
    height: 100px;
`;


export const StyledContent = styled(Appbar.Content)`
    padding-left: 45px;
`
