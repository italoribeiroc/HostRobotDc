import styled from "styled-components/native";
import { Appbar, IconButton } from "react-native-paper";
import brFlag from '../../images/brFlag.png'

export const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: 'space-around';
    width: 90%;
    background-color: '#fff';
    margin-bottom: 3.6875rem;
    padding-right: 190px;
    
`;

export const StyledBackAction = styled(IconButton)`
    width: 128px;
    height: 100px;
    align-self: 'flex-start'
`;


export const StyledContent = styled(Appbar.Content)`
    align-self: 'center';
    padding-left: 45px;
    
`
