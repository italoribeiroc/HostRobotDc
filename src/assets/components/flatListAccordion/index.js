import { useTheme } from 'react-native-paper';
import { FlatList } from 'react-native';
import { AccordionGroup, AccordionItem, ListItem, ItemImage} from './style';
import React, { useState } from 'react';

export default function FlatListAccordion({ data }) {
    const [expandedId, setExpandedId] = useState(null);
    const theme = useTheme();

    const renderItem = ({ item }) => (
        <AccordionItem
            title={item.name}
            id={item.name}
            expanded={expandedId === item.id}
            left={() => <ItemImage source={item.image} />}
            onPress={() => {
                setExpandedId(item.id !== expandedId ? item.id : null);
            }}
            theme={theme}
        >
            <ListItem 
                descriptionNumberOfLines={10}
                description={item.description}
            />
        </AccordionItem>
    );

    return (
        <AccordionGroup>
            <FlatList data={data} renderItem={renderItem} />
        </AccordionGroup>
    );
    }