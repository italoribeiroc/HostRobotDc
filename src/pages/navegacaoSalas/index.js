import { View, TouchableOpacity, Image } from 'react-native';
import NavigationHeader from '../../assets/components/navigationHeader';

import mapa1Andar from '../../assets/images/mapaImages/mapa1andar.png';



export default function Salas({ navigation }) {

    const handlePress = (sala) => {
        console.log(sala);
        fetch(`http://192.168.137.14:5000/ros/goTo/${sala}`).catch((error) => console.log(error));
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', paddingTop: 40 }}>
            <NavigationHeader navigation={navigation} title={'Salas: Para onde você deseja ir?'} />
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Image source={mapa1Andar} />
                <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>

                    <TouchableOpacity onPress={() => handlePress('LE-1')} style={{ position: 'absolute', top: 10, left: 90 }}>
                        <View style={{ width: 80, height: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('LE-2')} style={{ position: 'absolute', top: 10, left: 175 }}>
                        <View style={{ width: 80, height: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('LE-3')} style={{ position: 'absolute', top: 10, left: 260 }}>
                        <View style={{ width: 80, height: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('LE-4')} style={{ position: 'absolute', top: 10, left: 345 }}>
                        <View style={{ width: 80, height: 100 }} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => handlePress('PPG-CC4')} style={{ position: 'absolute', top: 10, left: 500 }}>
                        <View style={{ width: 80, height: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('Maker')} style={{ position: 'absolute', top: 10, left: 585 }}>
                        <View style={{ width: 110, height: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('LE-6')} style={{ position: 'absolute', top: 10, left: 705 }}>
                        <View style={{ width: 80, height: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('Auditorio')} style={{ position: 'absolute', top: 10, left: 790 }}>
                        <View style={{ width: 80, height: 200 }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handlePress('Copa')} style={{ position: 'absolute', top: 180, left: 10 }}>
                        <View style={{ width: 80, height: 90 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress('Lig')} style={{ position: 'absolute', top: 275, left: 10 }}>
                        <View style={{ width: 80, height: 90 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};