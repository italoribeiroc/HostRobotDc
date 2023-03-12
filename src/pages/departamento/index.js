import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native';
import CardButton from '../../assets/components/cardButton';
import NavigationHeader from '../../assets/components/navigationHeader';
import gruposExtensaoIcon from '../../assets/images/menuImages/grupos_extensao_icon.png'
import laboratoriosIcon from '../../assets/images/menuImages/laboratorios_icon.png'
import eventosIcon from '../../assets/images/menuImages/eventos_icon.png'
import salasIcon from '../../assets/images/menuImages/salas_icon.png'
import { MenuGrid } from '../../assets/components/menuGrid/style';
import BrasilFlag from '../../assets/images/brasil.svg';

import { setConfiguration } from 'react-grid-system';
setConfiguration({ maxScreenClass:'sm', defaultScreenClass:'sm', gridColumns:'2' });
import { Container, Row, Col } from 'react-grid-system';

export default function Departamento({ navigation }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <NavigationHeader navigation={navigation} title={'Departamento de Computação'}/>
            <Container style={{alignItems: 'center'}}>
            <Row style={{alignItems: 'center', marginLeft:'-30%'}}>
            <Col sm={4} style={{alignItems: 'center', marginBottom:'15%'}}>
                <CardButton image={gruposExtensaoIcon} title={"Grupos de Extensão"} action={() => {
                    navigation.navigate('GruposDeExtensao');
                }}/>
            </Col>
            <Col sm={4} style={{alignItems: 'center'}}>
                <CardButton image={laboratoriosIcon} title={"Laboratórios e Pesquisa"} action={() => {
                    navigation.navigate('LaboratoriosPesquisa');
                }}/>
            </Col>
            </Row>
            <Row style={{alignItems: 'center', marginLeft:'-45%'}}>
            <Col sm={4} style={{alignItems: 'center', marginBottom:'15%'}}>
                <CardButton image={eventosIcon} title={"Eventos"} />
            </Col>
            <Col sm={4} style={{alignItems: 'center'}}>
                <CardButton image={salasIcon} title={"Salas"} action={() => {
                    navigation.navigate('Salas');
                }}/>
            </Col>
            </Row>
            </Container>            
        </View>
    );
};