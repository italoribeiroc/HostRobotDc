import * as React from 'react';
import { IconButton, MD3Colors, Appbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { HeaderContainer, StyledBackAction, StyledContent} from './style';
import brasilFlag from '../../images/brasil.svg';
import { ImageBackground } from 'react-native';

export default function NavigationHeader({ navigation, title }) {
    const route = useRoute();
    const { name } = route;

    return(
        <HeaderContainer>
            {name !== 'Home' && (
                <StyledBackAction 
                    icon="arrow-left"
                    size={35}
                    onPress={() => navigation.goBack()}  
                />
            )}
            <StyledContent title={title} titleStyle={{ fontSize: 40, lineHeight: 45, color:'#4B6076', fontFamily:'verdana'}}/>
            <IconButton
                icon="wheelchair-accessibility"
                iconColor={'#4B6076'}
                containerColor={'#CEE5FF'}
                size={35}
                mode={'contained'}
                onPress={() => console.log('Pressed')}
            />
            <ImageBackground source={brasilFlag} style={{height:55, width:55}}>
                <IconButton
                    containerColor
                    mode={'contained'}
                    size={35}
                
                    onPress={() => console.log('Pressed')}
                />
            </ImageBackground>
        </HeaderContainer>
        
    );
}