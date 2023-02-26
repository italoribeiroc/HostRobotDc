import { useState, useEffect } from 'react';
import { View, Image} from 'react-native';
import { MapImage } from './style';
import NavigationHeader from '../../assets/components/navigationHeader';
import { } from 'react-native-paper';
import { Tabs, TabScreen } from 'react-native-paper-tabs';

import mapa1Andar from '../../assets/images/mapaImages/mapa1andar.png';


export default function Salas({navigation}){

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', paddingTop: 40}}>
            <NavigationHeader navigation={navigation} title={'Salas'}/>
            <View style={{ flex:1, backgroundColor: '#fff' }}>
                <img src={mapa1Andar} />
            </View>
        </View>
    )
};