import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { CardButton } from '../../assets/components/cardButton';

export default function Home() {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Teste</Text>
            <CardButton></CardButton>
        </View>
    );
};