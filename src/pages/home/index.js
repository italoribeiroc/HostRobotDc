import React, { useState, useEffect } from 'react'
import { View } from 'react-native';
import CardButton from '../../assets/components/cardButton';
import NavigationHeader from '../../assets/components/navigationHeader';
import navigationIcon from '../../assets/images/menuImages/navegacao_icon.png'
import departamentoIcon from '../../assets/images/menuImages/departamento_icon.png'
import alimentacaoIcon from '../../assets/images/menuImages/alimentacao_icon.png'
import horariosIcon from '../../assets/images/menuImages/horarios_icon.png'
import { MenuGrid } from '../../assets/components/menuGrid/style';

export default function Home({ navigation }) {

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <NavigationHeader />
            <MenuGrid>
                <CardButton image={navigationIcon} title={"Navegação"} />
                <CardButton image={departamentoIcon} title={"Departamento"} action={() => {
                    navigation.navigate('Departamento');
                }}/>
                <CardButton image={alimentacaoIcon} title={"Alimentação"} action={() => {
                    navigation.navigate('Cardapio');
                }} />
                <CardButton image={horariosIcon} title={"Horários"} />
            </MenuGrid>
        </View>
    );
};