import { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import NavigationHeader from '../../assets/components/navigationHeader';
import ItemCardapio from '../../assets/components/itemCardapio';
import { Avatar, Text } from 'react-native-paper';
import { Tabs, TabScreen } from 'react-native-paper-tabs';
import moment from 'moment';

import defaultMenu from './cached.js';

const icon = iconName => props => <Avatar.Icon style={styles.container} {...props} icon={iconName} />;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B3D4FF',
  },
});

const info = (menu) => [
  {
    title: 'Prato Principal',
    subtitle: 'Sem Restrição',
    content: menu?.main_dish_unrestricted,
    icon: 'food-drumstick',
  },
  {
    title: 'Prato Principal',
    subtitle: 'Vegetariano',
    content: menu?.main_dish_vegetarian,
    icon: 'leaf',
  },
  {
    title: 'Prato Principal',
    subtitle: 'Extra com ovo',
    content: menu?.main_dish_extra,
    icon: 'egg-fried',
  },
  {
    title: 'Guarnição',
    subtitle: null,
    content: menu?.garnish,
    icon: 'pasta',
  },
  {
    title: 'Acompanhamento 1',
    subtitle: null,
    content: menu?.accompaniment.split('/')[0].trim(),
    icon: 'rice',
  },
  {
    title: 'Acompanhamento 2',
    subtitle: null,
    content: menu?.accompaniment.split('/')[1].trim(),
    icon: 'pot-steam',
  },
  {
    title: 'Salada',
    subtitle: null,
    content: menu?.salads,
    icon: 'bowl-mix',
  },
  {
    title: 'Sobremesa',
    subtitle: null,
    content: menu?.dessert,
    icon: 'fruit-watermelon',
  },
]

const Cardapio = ({ navigation }) => {
  const [list, setList] = useState(defaultMenu);

  const handleListChange = (e) => {
    setList(e);
  }

  // useEffect(() => {
  //   fetch('https://petbcc.ufscar.br/ru_api/')
  //     .then(r => r.json())
  //     .then(data => handleListChange(data));
  // }, []);


  const baseDate = '15/02';
  const meals = ['Almoço', 'Jantar'];
  const dates = [moment(baseDate, 'DD/MM'), moment(baseDate, 'DD/MM').add(1, 'days'), moment(baseDate, 'DD/MM').add(2, 'days')];
  const campus = 'São Carlos';

  const menu = list
    .filter(item =>
      item.campus == campus &&
      dates.map(date => date.format('YYYY-MM-DD')).includes(item.date)
    )
    .reduce((map, item) => {
      if (!map[item.date]) map[item.date] = {};
      map[item.date][item.meal_type] = item;
      return map;
    }, {});

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', paddingTop: 40 }}>
      <NavigationHeader navigation={navigation} title={'Restaurante Universitário'} />
      <View style={{ flex: 1, backgroundColor: '#fff', width: 900 }}>
        <Tabs uppercase={false} mode='scrollable' style={{ backgroundColor: '#fff', alignItems: 'center' }} theme={{ colors: { primary: '#4B6076' } }}>
          {
            dates.map((date) => (
              <TabScreen label={date.format('DD/MM')} key={date.format()}>
                <Tabs uppercase={false} mode='scrollable' style={{ backgroundColor: '#fff', alignItems: 'center' }} theme={{ colors: { primary: '#4B6076' } }}>
                  {
                    meals.map((meal) => (
                      <TabScreen label={meal} key={meal}>
                        <FlatList
                          data={info(menu[date.format('YYYY-MM-DD')][meal])}
                          renderItem={({ item }) => (
                            <ItemCardapio className='cardapio-item'
                              key={item.title + item.subtitle}
                              title={item.title} subtitle={item.subtitle}
                              content={item.content} icon={icon(item.icon)}
                              style={{ backgroundColor: '#E8F2FF', width: 200, height: 150, marginTop: 20 }}
                            />
                          )}
                          keyExtractor={item => item.title + item.subtitle}
                          numColumns={4}
                          columnWrapperStyle={{ justifyContent: 'space-between' }}
                          style={{ width: '100%' }}
                        />
                      </TabScreen>
                    ))
                  }
                </Tabs>
              </TabScreen>
            ))
          }
        </Tabs>
      </View>
    </View>
  )
};

export default Cardapio;
