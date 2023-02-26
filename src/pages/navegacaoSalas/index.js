import { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TabItem, Tab } from './style';
import NavigationHeader from '../../assets/components/navigationHeader';
import { } from 'react-native-paper';
import { Tabs, TabScreen } from 'react-native-paper-tabs';

import mapa1Andar from '../../assets/images/mapaImages/mapa1andar.png';
import mapa2Andar from '../../assets/images/mapaImages/mapa2andar.png';



export default function Salas({navigation}){

    const handlePress = (sala) => {
        console.log(`Clicou para ir na sala: ${sala}`);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', paddingTop: 40}}>
            <NavigationHeader navigation={navigation} title={'Salas'}/>
            <View style={{ flex:1, backgroundColor: '#fff' }}>
                <Tabs style={{ marginBottom: 40, backgroundColor:'#fff', shadowColor:'#fff', color:'#4B6076' }}
                    theme={{ colors: { primary: '#4B6076' } }}
                >
                    <TabScreen label="1º Andar" icon="home">
                        <View>
                            <img src={mapa1Andar} />
                            <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>

                                {/*LE-1 a LE-4 */}
                                <TouchableOpacity onPress={() => handlePress('le-1')} style={{ position: 'absolute', top: 10, left: 90 }}>
                                    <View style={{ width: 80, height: 100 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handlePress('le-2')} style={{ position: 'absolute', top: 10, left: 175 }}>
                                    <View style={{ width: 80, height: 100 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handlePress('le-3')} style={{ position: 'absolute', top: 10, left: 260 }}>
                                    <View style={{ width: 80, height: 100 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handlePress('le-4')} style={{ position: 'absolute', top: 10, left: 345 }}>
                                    <View style={{ width: 80, height: 100 }} />
                                </TouchableOpacity>


                                <TouchableOpacity onPress={() => handlePress('PPGCC-4')} style={{ position: 'absolute', top: 10, left: 500 }}>
                                    <View style={{ width: 80, height: 100 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handlePress('Espaço Maker')} style={{ position: 'absolute', top: 10, left: 585 }}>
                                    <View style={{ width: 110, height: 100 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handlePress('le-6')} style={{ position: 'absolute', top: 10, left: 705 }}>
                                    <View style={{ width: 80, height: 100 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handlePress('Auditorio')} style={{ position: 'absolute', top: 10, left: 790 }}>
                                    <View style={{ width: 80, height: 200 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => handlePress('Copa')} style={{ position: 'absolute', top: 180, left: 10 }}>
                                    <View style={{ width: 80, height: 90 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handlePress('LIG')} style={{ position: 'absolute', top: 275, left: 10 }}>
                                    <View style={{ width: 80, height: 90 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handlePress('Churrasqueira')} style={{ position: 'absolute', top: 275, left: 95 }}>
                                    <View style={{ width: 250, height: 100 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TabScreen>
                    <TabScreen label="2º Andar" icon="home">
                        <img src={mapa2Andar} />
                    </TabScreen>
                </Tabs>
            </View>
        </View>
    )
};