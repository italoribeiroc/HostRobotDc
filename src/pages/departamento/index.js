import { FlatList, View } from 'react-native';
import CardButton from '../../assets/components/cardButton';
import NavigationHeader from '../../assets/components/navigationHeader';
import gruposExtensaoIcon from '../../assets/images/menuImages/grupos_extensao_icon.png'
import laboratoriosIcon from '../../assets/images/menuImages/laboratorios_icon.png'
import eventosIcon from '../../assets/images/menuImages/eventos_icon.png'
import salasIcon from '../../assets/images/menuImages/salas_icon.png'


export default function Departamento({ navigation }) {
    const pages = [
        {
            title: 'Grupos de Extensão',
            image: gruposExtensaoIcon,
            action: () => {
                navigation.navigate('GruposDeExtensao');
            }
        },
        {
            title: 'Laboratórios e Pesquisa',
            image: laboratoriosIcon,
            action: () => {
                navigation.navigate('LaboratoriosPesquisa');
            }
        },
        {
            title: 'Eventos',
            image: eventosIcon
        },
        {
            title: 'Salas',
            image: salasIcon,
            action: () => {
                navigation.navigate('Salas');
            }
        }
    ];

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <NavigationHeader navigation={navigation} title={'Departamento de Computação'} />
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