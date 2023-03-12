import React, { useState, useEffect } from 'react'
import { View } from 'react-native';
import CardButton from '../../assets/components/cardButton';
import NavigationHeader from '../../assets/components/navigationHeader';
import navigationIcon from '../../assets/images/menuImages/navegacao_icon.png'
import departamentoIcon from '../../assets/images/menuImages/departamento_icon.png'
import alimentacaoIcon from '../../assets/images/menuImages/alimentacao_icon.png'
import horariosIcon from '../../assets/images/menuImages/horarios_icon.png'
// import { MenuGrid } from '../../assets/components/menuGrid/style';

import { setConfiguration } from 'react-grid-system';
setConfiguration({ maxScreenClass:'sm', defaultScreenClass:'sm', gridColumns:'2'});
import { Container, Row, Col } from 'react-grid-system';

export default function Home({ navigation }) {

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <NavigationHeader />
            <Container style={{alignItems: 'center'}}>
            <Row style={{alignItems: 'center', marginLeft:'-30%'}}>
            <Col sm={4} style={{alignItems: 'center', marginBottom:'15%'}}>
                <CardButton image={navigationIcon} title={"Navegação"} />
            </Col>
            <Col sm={4} style={{alignItems: 'center'}}>
                <CardButton image={departamentoIcon} title={"Departamento"} action={() => {
                    navigation.navigate('Departamento');
                }}/>
            </Col>
            </Row>
            <Row style={{alignItems: 'center', marginLeft:'-45%'}}>
            <Col sm={4} style={{alignItems: 'center', marginBottom:'15%'}}>
                <CardButton image={alimentacaoIcon} title={"Alimentação"} action={() => {
                    navigation.navigate('Cardapio');
                }} />
            </Col>
            <Col sm={4} style={{alignItems: 'center'}}>
                <CardButton image={horariosIcon} title={"Horários"} />
            </Col>
            </Row>
            </Container>
        </View>
    );
};