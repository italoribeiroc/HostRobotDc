import React, { useState, useEffect } from 'react'
import { FlatList, View } from 'react-native';
import CardButton from '../../assets/components/cardButton';
import NavigationHeader from '../../assets/components/navigationHeader';
import navigationIcon from '../../assets/images/menuImages/navegacao_icon.png'
import departamentoIcon from '../../assets/images/menuImages/departamento_icon.png'
import alimentacaoIcon from '../../assets/images/menuImages/alimentacao_icon.png'
import horariosIcon from '../../assets/images/menuImages/horarios_icon.png'

export default function Home({ navigation }) {
    const pages = [
        {
            title: 'Navegação',
            image: navigationIcon,
            action: () => { }
        },
        {
            title: 'Departamento',
            image: departamentoIcon,
            action: () => {
                navigation.navigate('Departamento');
            }
        },
        {
            title: 'Alimentação',
            image: alimentacaoIcon,
            action: () => {
                navigation.navigate('Cardapio');
            }
        },
        {
            title: 'Horários',
            image: horariosIcon
        }
    ];

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <NavigationHeader />
            <FlatList
                data={pages}
                renderItem={({ item }) => (<CardButton image={item.image} title={item.title} action={item.action} />)}
                keyExtractor={item => item.title}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{ padding: 20 }}
                style={{ flexBasis: 0, width: '60%' }}
                ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
            />
        </View>
    );
};