import * as React from 'react';
import { StyledCard, TouchableCard, StyledTitle, StyledCover } from './style';
import { TouchableOpacity } from 'react-native';


export default function CardButton({ title, image, action }) {
    return (
        <TouchableOpacity onPress={action}>
            <StyledCard>
                <StyledCover source={image} />
                <StyledTitle title={title} titleVariant={"titleLarge"} />
            </StyledCard>
        </TouchableOpacity>
    );
}
