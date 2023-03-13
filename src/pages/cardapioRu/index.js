import { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import NavigationHeader from '../../assets/components/navigationHeader';
import ItemCardapio from '../../assets/components/itemCardapio';
import { Avatar, Text } from 'react-native-paper';
import { Tabs, TabScreen } from 'react-native-paper-tabs';
import moment from 'moment';

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

const defaultMenu = [
  {
    "id": 71248,
    "meal_type": "Almoço",
    "campus": "São Carlos",
    "created_at": "2023-02-18T02:13:02.768465Z",
    "date": "2023-02-13",
    "main_dish_unrestricted": "Frango Xadrez",
    "main_dish_vegetarian": "Grão de Bico Xadrez",
    "main_dish_extra": "Ovos Mexidos",
    "garnish": "Farofa Rica",
    "accompaniment": "Arroz Branco e Integral / Feijão",
    "salads": "Dois Tipos de Salada",
    "dessert": "Fruta",
    "juice": "Não Definido"
  },
  {
    "id": 71252,
    "meal_type": "Jantar",
    "campus": "São Carlos",
    "created_at": "2023-02-18T02:13:02.785345Z",
    "date": "2023-02-13",
    "main_dish_unrestricted": "Filé de Frango Grelhado",
    "main_dish_vegetarian": "Hamburguer Vegetariano",
    "main_dish_extra": "Ovos Mexidos",
    "garnish": "Farofa Rica",
    "accompaniment": "Arroz Branco e Integral / Feijão",
    "salads": "Dois Tipos de Salada",
    "dessert": "Fruta",
    "juice": "Não Definido"
  },
  {
    "id": 71256,
    "meal_type": "Almoço",
    "campus": "São Carlos",
    "created_at": "2023-02-18T02:13:02.806322Z",
    "date": "2023-02-14",
    "main_dish_unrestricted": "Carne de Panela",
    "main_dish_vegetarian": "Batata Recheada com PTS",
    "main_dish_extra": "Omelete com Salsinha",
    "garnish": "Polenta Cremosa",
    "accompaniment": "Arroz Branco e Integral / Feijão Preto",
    "salads": "Dois Tipos de Salada",
    "dessert": "Doce",
    "juice": "Não Definido"
  },
  {
    "id": 71260,
    "meal_type": "Jantar",
    "campus": "São Carlos",
    "created_at": "2023-02-18T02:13:02.821843Z",
    "date": "2023-02-14",
    "main_dish_unrestricted": "Carne Desfiada com Legumes",
    "main_dish_vegetarian": "Quiche de Grão de Bico",
    "main_dish_extra": "Omelete com Salsinha",
    "garnish": "Polenta Cremosa",
    "accompaniment": "Arroz Branco e Integral / Feijão Preto",
    "salads": "Dois Tipos de Salada",
    "dessert": "Doce",
    "juice": "Não Definido"
  },
  {
    "id": 71264,
    "meal_type": "Almoço",
    "campus": "São Carlos",
    "created_at": "2023-02-18T02:13:02.839899Z",
    "date": "2023-02-15",
    "main_dish_unrestricted": "Filé de Frango à Pizzaiollo",
    "main_dish_vegetarian": "Filé de PTS à Pizzaiollo",
    "main_dish_extra": "Crepioca",
    "garnish": "Batata Rustica",
    "accompaniment": "Arroz Branco e Integral / Feijão",
    "salads": "Dois Tipos de Salada",
    "dessert": "Fruta",
    "juice": "Não Definido"
  },
  {
    "id": 71268,
    "meal_type": "Jantar",
    "campus": "São Carlos",
    "created_at": "2023-02-18T02:13:02.856526Z",
    "date": "2023-02-15",
    "main_dish_unrestricted": "Iscas de Frango com Legumes",
    "main_dish_vegetarian": "Charuto de Repolho com PTS",
    "main_dish_extra": "Crepioca",
    "garnish": "Batata Rustica",
    "accompaniment": "Arroz Branco e Integral / Feijão",
    "salads": "Dois Tipos de Salada",
    "dessert": "Fruta",
    "juice": "Não Definido"
  }
];

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

  const meals = ['Almoço', 'Jantar'];
  const dates = [moment('15/02', 'DD/MM').subtract(2, 'days'), moment('15/02', 'DD/MM').subtract(1, 'days'), moment('15/02', 'DD/MM')];
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
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Tabs uppercase={false} mode='scrollable' style={{ backgroundColor: '#fff', alignItems: 'center', marginLeft: -200, marginRight: -200 }} theme={{ colors: { primary: '#4B6076' } }}>
          {
            dates.map((date) => (
              <TabScreen label={date.format('DD/MM')} key={date.format()}>
                <Tabs uppercase={false} mode='scrollable' style={{ backgroundColor: '#fff', alignItems: 'center', marginLeft: -200, marginRight: -200 }} theme={{ colors: { primary: '#4B6076' } }}>
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
                              style={{ backgroundColor: '#E8F2FF', width: 200, height: 150 }} />
                          )}
                          keyExtractor={item => item.title + item.subtitle}
                          numColumns={4}
                          columnWrapperStyle={{ justifyContent: 'space-between' }}
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
