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

export default function Departamento({ navigation }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <NavigationHeader navigation={navigation} title={'Departamento de Computação'}/>
            <MenuGrid>
                <CardButton image={gruposExtensaoIcon} title={"Grupos de Extensão"} action={() => {
                    navigation.navigate('GruposDeExtensao');
                }}/>
                <CardButton image={laboratoriosIcon} title={"Laboratórios e Pesquisa"} />
                <CardButton image={eventosIcon} title={"Eventos"} />
                <CardButton image={salasIcon} title={"Salas"} action={() => {
                    navigation.navigate('Salas');
                }}/>
                
            </MenuGrid>
            
        </View>
    );
};