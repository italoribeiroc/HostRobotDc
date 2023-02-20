import * as React from 'react';
import { StyledCard, TouchableCard, StyledTitle, StyledCover } from './style';


export default function CardButton({ title, image, action }) {
    return (
        <TouchableCard onPress={action}>
            <StyledCard>
                <StyledCover source={image} />
                <StyledTitle title={title} titleVariant={"titleLarge"}/>
            </StyledCard>
        </TouchableCard>
    );
}
