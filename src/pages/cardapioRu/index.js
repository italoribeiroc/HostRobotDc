import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationHeader from '../../assets/components/navigationHeader';
import ItemCardapio from '../../assets/components/itemCardapio';
import { Avatar } from 'react-native-paper';
import { Tabs, TabScreen } from 'react-native-paper-tabs';
import moment from 'moment';

import './cardapio.css';

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

const Cardapio = ({navigation}) => {
  const [list, setList] = useState([{ "id": 71224, "meal_type": "Almoço", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.663032Z", "date": "2023-02-10", "main_dish_unrestricted": "Almondegas ao Sugo", "main_dish_vegetarian": "Almondegas Vegetariana ao Sugo", "main_dish_extra": "Ovos Fritos", "garnish": "Creme de Milho", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71225, "meal_type": "Almoço", "campus": "Araras", "created_at": "2023-02-18T02:13:02.669879Z", "date": "2023-02-10", "main_dish_unrestricted": "Almondegas ao Sugo", "main_dish_vegetarian": "Almondegas Vegetariana ao Sugo", "main_dish_extra": "Ovos Fritos", "garnish": "Creme de Milho", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71226, "meal_type": "Almoço", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.673900Z", "date": "2023-02-10", "main_dish_unrestricted": "Almondegas ao Sugo", "main_dish_vegetarian": "Almondegas Vegetariana ao Sugo", "main_dish_extra": "Ovos Fritos", "garnish": "Creme de Milho", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71227, "meal_type": "Almoço", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.677839Z", "date": "2023-02-10", "main_dish_unrestricted": "Almondegas ao Sugo", "main_dish_vegetarian": "Almondegas Vegetariana ao Sugo", "main_dish_extra": "Ovos Fritos", "garnish": "Creme de Milho", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71228, "meal_type": "Jantar", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.681392Z", "date": "2023-02-10", "main_dish_unrestricted": "Quibe Assado", "main_dish_vegetarian": "Quibe Vegetariano", "main_dish_extra": "Ovos Fritos", "garnish": "Creme de Milho", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71229, "meal_type": "Jantar", "campus": "Araras", "created_at": "2023-02-18T02:13:02.685136Z", "date": "2023-02-10", "main_dish_unrestricted": "Quibe Assado", "main_dish_vegetarian": "Quibe Vegetariano", "main_dish_extra": "Ovos Fritos", "garnish": "Creme de Milho", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71230, "meal_type": "Jantar", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.688785Z", "date": "2023-02-10", "main_dish_unrestricted": "Quibe Assado", "main_dish_vegetarian": "Quibe Vegetariano", "main_dish_extra": "Ovos Fritos", "garnish": "Creme de Milho", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71231, "meal_type": "Jantar", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.692792Z", "date": "2023-02-10", "main_dish_unrestricted": "Quibe Assado", "main_dish_vegetarian": "Quibe Vegetariano", "main_dish_extra": "Ovos Fritos", "garnish": "Creme de Milho", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71232, "meal_type": "Almoço", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.697142Z", "date": "2023-02-11", "main_dish_unrestricted": "Feijoada", "main_dish_vegetarian": "Feijoada Vegetariana", "main_dish_extra": "Ovos Fritos", "garnish": "Farofa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71233, "meal_type": "Almoço", "campus": "Araras", "created_at": "2023-02-18T02:13:02.701695Z", "date": "2023-02-11", "main_dish_unrestricted": "Feijoada", "main_dish_vegetarian": "Feijoada Vegetariana", "main_dish_extra": "Ovos Fritos", "garnish": "Farofa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71234, "meal_type": "Almoço", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.707035Z", "date": "2023-02-11", "main_dish_unrestricted": "Feijoada", "main_dish_vegetarian": "Feijoada Vegetariana", "main_dish_extra": "Ovos Fritos", "garnish": "Farofa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71235, "meal_type": "Almoço", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.711174Z", "date": "2023-02-11", "main_dish_unrestricted": "Feijoada", "main_dish_vegetarian": "Feijoada Vegetariana", "main_dish_extra": "Ovos Fritos", "garnish": "Farofa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71236, "meal_type": "Jantar", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.715791Z", "date": "2023-02-11", "main_dish_unrestricted": "Guisado Misto (carne Bovina e Frango)", "main_dish_vegetarian": "Guisado Misto Vegetariano", "main_dish_extra": "Ovos Fritos", "garnish": "Farofa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71237, "meal_type": "Jantar", "campus": "Araras", "created_at": "2023-02-18T02:13:02.721063Z", "date": "2023-02-11", "main_dish_unrestricted": "Guisado Misto (carne Bovina e Frango)", "main_dish_vegetarian": "Guisado Misto Vegetariano", "main_dish_extra": "Ovos Fritos", "garnish": "Farofa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71238, "meal_type": "Jantar", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.725118Z", "date": "2023-02-11", "main_dish_unrestricted": "Guisado Misto (carne Bovina e Frango)", "main_dish_vegetarian": "Guisado Misto Vegetariano", "main_dish_extra": "Ovos Fritos", "garnish": "Farofa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71239, "meal_type": "Jantar", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.728951Z", "date": "2023-02-11", "main_dish_unrestricted": "Guisado Misto (carne Bovina e Frango)", "main_dish_vegetarian": "Guisado Misto Vegetariano", "main_dish_extra": "Ovos Fritos", "garnish": "Farofa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71240, "meal_type": "Almoço", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.732875Z", "date": "2023-02-12", "main_dish_unrestricted": "Pastel de Carne + Hamburguer", "main_dish_vegetarian": "Quiche de PTS", "main_dish_extra": "Ovos Mexidos", "garnish": "Repolho Refogado", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71241, "meal_type": "Almoço", "campus": "Araras", "created_at": "2023-02-18T02:13:02.736782Z", "date": "2023-02-12", "main_dish_unrestricted": "Pastel de Carne + Hamburguer", "main_dish_vegetarian": "Quiche de PTS", "main_dish_extra": "Ovos Mexidos", "garnish": "Repolho Refogado", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71242, "meal_type": "Almoço", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.740845Z", "date": "2023-02-12", "main_dish_unrestricted": "Pastel de Carne + Hamburguer", "main_dish_vegetarian": "Quiche de PTS", "main_dish_extra": "Ovos Mexidos", "garnish": "Repolho Refogado", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71243, "meal_type": "Almoço", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.745642Z", "date": "2023-02-12", "main_dish_unrestricted": "Pastel de Carne + Hamburguer", "main_dish_vegetarian": "Quiche de PTS", "main_dish_extra": "Ovos Mexidos", "garnish": "Repolho Refogado", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71244, "meal_type": "Jantar", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.749753Z", "date": "2023-02-12", "main_dish_unrestricted": "Esfiha de Carne + Hamburguer", "main_dish_vegetarian": "Filé de PTS", "main_dish_extra": "Ovos Mexidos", "garnish": "Repolho Refogado", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71245, "meal_type": "Jantar", "campus": "Araras", "created_at": "2023-02-18T02:13:02.754213Z", "date": "2023-02-12", "main_dish_unrestricted": "Esfiha de Carne + Hamburguer", "main_dish_vegetarian": "Filé de PTS", "main_dish_extra": "Ovos Mexidos", "garnish": "Repolho Refogado", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71246, "meal_type": "Jantar", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.759176Z", "date": "2023-02-12", "main_dish_unrestricted": "Esfiha de Carne + Hamburguer", "main_dish_vegetarian": "Filé de PTS", "main_dish_extra": "Ovos Mexidos", "garnish": "Repolho Refogado", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71247, "meal_type": "Jantar", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.763765Z", "date": "2023-02-12", "main_dish_unrestricted": "Esfiha de Carne + Hamburguer", "main_dish_vegetarian": "Filé de PTS", "main_dish_extra": "Ovos Mexidos", "garnish": "Repolho Refogado", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71248, "meal_type": "Almoço", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.768465Z", "date": "2023-02-13", "main_dish_unrestricted": "Frango Xadrez", "main_dish_vegetarian": "Grão de Bico Xadrez", "main_dish_extra": "Ovos Mexidos", "garnish": "Farofa Rica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71249, "meal_type": "Almoço", "campus": "Araras", "created_at": "2023-02-18T02:13:02.773074Z", "date": "2023-02-13", "main_dish_unrestricted": "Frango Xadrez", "main_dish_vegetarian": "Grão de Bico Xadrez", "main_dish_extra": "Ovos Mexidos", "garnish": "Farofa Rica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71250, "meal_type": "Almoço", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.777510Z", "date": "2023-02-13", "main_dish_unrestricted": "Frango Xadrez", "main_dish_vegetarian": "Grão de Bico Xadrez", "main_dish_extra": "Ovos Mexidos", "garnish": "Farofa Rica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71251, "meal_type": "Almoço", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.781497Z", "date": "2023-02-13", "main_dish_unrestricted": "Frango Xadrez", "main_dish_vegetarian": "Grão de Bico Xadrez", "main_dish_extra": "Ovos Mexidos", "garnish": "Farofa Rica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71252, "meal_type": "Jantar", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.785345Z", "date": "2023-02-13", "main_dish_unrestricted": "Filé de Frango Grelhado", "main_dish_vegetarian": "Hamburguer Vegetariano", "main_dish_extra": "Ovos Mexidos", "garnish": "Farofa Rica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71253, "meal_type": "Jantar", "campus": "Araras", "created_at": "2023-02-18T02:13:02.789809Z", "date": "2023-02-13", "main_dish_unrestricted": "Filé de Frango Grelhado", "main_dish_vegetarian": "Hamburguer Vegetariano", "main_dish_extra": "Ovos Mexidos", "garnish": "Farofa Rica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71254, "meal_type": "Jantar", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.795974Z", "date": "2023-02-13", "main_dish_unrestricted": "Filé de Frango Grelhado", "main_dish_vegetarian": "Hamburguer Vegetariano", "main_dish_extra": "Ovos Mexidos", "garnish": "Farofa Rica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71255, "meal_type": "Jantar", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.800009Z", "date": "2023-02-13", "main_dish_unrestricted": "Filé de Frango Grelhado", "main_dish_vegetarian": "Hamburguer Vegetariano", "main_dish_extra": "Ovos Mexidos", "garnish": "Farofa Rica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71256, "meal_type": "Almoço", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.806322Z", "date": "2023-02-14", "main_dish_unrestricted": "Carne de Panela", "main_dish_vegetarian": "Batata Recheada com PTS", "main_dish_extra": "Omelete com Salsinha", "garnish": "Polenta Cremosa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71257, "meal_type": "Almoço", "campus": "Araras", "created_at": "2023-02-18T02:13:02.810022Z", "date": "2023-02-14", "main_dish_unrestricted": "Carne de Panela", "main_dish_vegetarian": "Batata Recheada com PTS", "main_dish_extra": "Omelete com Salsinha", "garnish": "Polenta Cremosa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71258, "meal_type": "Almoço", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.813816Z", "date": "2023-02-14", "main_dish_unrestricted": "Carne de Panela", "main_dish_vegetarian": "Batata Recheada com PTS", "main_dish_extra": "Omelete com Salsinha", "garnish": "Polenta Cremosa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71259, "meal_type": "Almoço", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.817916Z", "date": "2023-02-14", "main_dish_unrestricted": "Carne de Panela", "main_dish_vegetarian": "Batata Recheada com PTS", "main_dish_extra": "Omelete com Salsinha", "garnish": "Polenta Cremosa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71260, "meal_type": "Jantar", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.821843Z", "date": "2023-02-14", "main_dish_unrestricted": "Carne Desfiada com Legumes", "main_dish_vegetarian": "Quiche de Grão de Bico", "main_dish_extra": "Omelete com Salsinha", "garnish": "Polenta Cremosa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71261, "meal_type": "Jantar", "campus": "Araras", "created_at": "2023-02-18T02:13:02.825839Z", "date": "2023-02-14", "main_dish_unrestricted": "Carne Desfiada com Legumes", "main_dish_vegetarian": "Quiche de Grão de Bico", "main_dish_extra": "Omelete com Salsinha", "garnish": "Polenta Cremosa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71262, "meal_type": "Jantar", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.829817Z", "date": "2023-02-14", "main_dish_unrestricted": "Carne Desfiada com Legumes", "main_dish_vegetarian": "Quiche de Grão de Bico", "main_dish_extra": "Omelete com Salsinha", "garnish": "Polenta Cremosa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71263, "meal_type": "Jantar", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.834954Z", "date": "2023-02-14", "main_dish_unrestricted": "Carne Desfiada com Legumes", "main_dish_vegetarian": "Quiche de Grão de Bico", "main_dish_extra": "Omelete com Salsinha", "garnish": "Polenta Cremosa", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71264, "meal_type": "Almoço", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.839899Z", "date": "2023-02-15", "main_dish_unrestricted": "Filé de Frango à Pizzaiollo", "main_dish_vegetarian": "Filé de PTS à Pizzaiollo", "main_dish_extra": "Crepioca", "garnish": "Batata Rustica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71265, "meal_type": "Almoço", "campus": "Araras", "created_at": "2023-02-18T02:13:02.843961Z", "date": "2023-02-15", "main_dish_unrestricted": "Filé de Frango à Pizzaiollo", "main_dish_vegetarian": "Filé de PTS à Pizzaiollo", "main_dish_extra": "Crepioca", "garnish": "Batata Rustica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71266, "meal_type": "Almoço", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.848338Z", "date": "2023-02-15", "main_dish_unrestricted": "Filé de Frango à Pizzaiollo", "main_dish_vegetarian": "Filé de PTS à Pizzaiollo", "main_dish_extra": "Crepioca", "garnish": "Batata Rustica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71267, "meal_type": "Almoço", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.852275Z", "date": "2023-02-15", "main_dish_unrestricted": "Filé de Frango à Pizzaiollo", "main_dish_vegetarian": "Filé de PTS à Pizzaiollo", "main_dish_extra": "Crepioca", "garnish": "Batata Rustica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71268, "meal_type": "Jantar", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.856526Z", "date": "2023-02-15", "main_dish_unrestricted": "Iscas de Frango com Legumes", "main_dish_vegetarian": "Charuto de Repolho com PTS", "main_dish_extra": "Crepioca", "garnish": "Batata Rustica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71269, "meal_type": "Jantar", "campus": "Araras", "created_at": "2023-02-18T02:13:02.860595Z", "date": "2023-02-15", "main_dish_unrestricted": "Iscas de Frango com Legumes", "main_dish_vegetarian": "Charuto de Repolho com PTS", "main_dish_extra": "Crepioca", "garnish": "Batata Rustica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71270, "meal_type": "Jantar", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.865398Z", "date": "2023-02-15", "main_dish_unrestricted": "Iscas de Frango com Legumes", "main_dish_vegetarian": "Charuto de Repolho com PTS", "main_dish_extra": "Crepioca", "garnish": "Batata Rustica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71271, "meal_type": "Jantar", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.869206Z", "date": "2023-02-15", "main_dish_unrestricted": "Iscas de Frango com Legumes", "main_dish_vegetarian": "Charuto de Repolho com PTS", "main_dish_extra": "Crepioca", "garnish": "Batata Rustica", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71272, "meal_type": "Almoço", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.873031Z", "date": "2023-02-16", "main_dish_unrestricted": "Frango Assado", "main_dish_vegetarian": "PTS à Primavera", "main_dish_extra": "Omelete com Cebola e Orégano", "garnish": "Parafuso ao Sugo", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71273, "meal_type": "Almoço", "campus": "Araras", "created_at": "2023-02-18T02:13:02.877627Z", "date": "2023-02-16", "main_dish_unrestricted": "Frango Assado", "main_dish_vegetarian": "PTS à Primavera", "main_dish_extra": "Omelete com Cebola e Orégano", "garnish": "Parafuso ao Sugo", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71274, "meal_type": "Almoço", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.882234Z", "date": "2023-02-16", "main_dish_unrestricted": "Frango Assado", "main_dish_vegetarian": "PTS à Primavera", "main_dish_extra": "Omelete com Cebola e Orégano", "garnish": "Parafuso ao Sugo", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71275, "meal_type": "Almoço", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.888031Z", "date": "2023-02-16", "main_dish_unrestricted": "Frango Assado", "main_dish_vegetarian": "PTS à Primavera", "main_dish_extra": "Omelete com Cebola e Orégano", "garnish": "Parafuso ao Sugo", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71276, "meal_type": "Jantar", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.894441Z", "date": "2023-02-16", "main_dish_unrestricted": "Frango ao Sugo", "main_dish_vegetarian": "Croquete de Lentilha ao Sugo", "main_dish_extra": "Omelete com Cebola e Orégano", "garnish": "Parafuso ao Sugo", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71277, "meal_type": "Jantar", "campus": "Araras", "created_at": "2023-02-18T02:13:02.900009Z", "date": "2023-02-16", "main_dish_unrestricted": "Frango ao Sugo", "main_dish_vegetarian": "Croquete de Lentilha ao Sugo", "main_dish_extra": "Omelete com Cebola e Orégano", "garnish": "Parafuso ao Sugo", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71278, "meal_type": "Jantar", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.904673Z", "date": "2023-02-16", "main_dish_unrestricted": "Frango ao Sugo", "main_dish_vegetarian": "Croquete de Lentilha ao Sugo", "main_dish_extra": "Omelete com Cebola e Orégano", "garnish": "Parafuso ao Sugo", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71279, "meal_type": "Jantar", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.911704Z", "date": "2023-02-16", "main_dish_unrestricted": "Frango ao Sugo", "main_dish_vegetarian": "Croquete de Lentilha ao Sugo", "main_dish_extra": "Omelete com Cebola e Orégano", "garnish": "Parafuso ao Sugo", "accompaniment": "Arroz Branco e Integral / Feijão Preto", "salads": "Dois Tipos de Salada", "dessert": "Doce", "juice": "Não Definido" }, { "id": 71280, "meal_type": "Almoço", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.916179Z", "date": "2023-02-17", "main_dish_unrestricted": "Panqueca de Carne", "main_dish_vegetarian": "Panqueca de PTS", "main_dish_extra": "Ovos Fritos", "garnish": "Legumes Sauteé", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71281, "meal_type": "Almoço", "campus": "Araras", "created_at": "2023-02-18T02:13:02.920542Z", "date": "2023-02-17", "main_dish_unrestricted": "Panqueca de Carne", "main_dish_vegetarian": "Panqueca de PTS", "main_dish_extra": "Ovos Fritos", "garnish": "Legumes Sauteé", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71282, "meal_type": "Almoço", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.926000Z", "date": "2023-02-17", "main_dish_unrestricted": "Panqueca de Carne", "main_dish_vegetarian": "Panqueca de PTS", "main_dish_extra": "Ovos Fritos", "garnish": "Legumes Sauteé", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71283, "meal_type": "Almoço", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.931349Z", "date": "2023-02-17", "main_dish_unrestricted": "Panqueca de Carne", "main_dish_vegetarian": "Panqueca de PTS", "main_dish_extra": "Ovos Fritos", "garnish": "Legumes Sauteé", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71284, "meal_type": "Jantar", "campus": "São Carlos", "created_at": "2023-02-18T02:13:02.935706Z", "date": "2023-02-17", "main_dish_unrestricted": "Carne Moída à Primavera", "main_dish_vegetarian": "Feijão Branco ao Vinagrete", "main_dish_extra": "Ovos Fritos", "garnish": "Legumes Sauteé", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71285, "meal_type": "Jantar", "campus": "Araras", "created_at": "2023-02-18T02:13:02.939833Z", "date": "2023-02-17", "main_dish_unrestricted": "Carne Moída à Primavera", "main_dish_vegetarian": "Feijão Branco ao Vinagrete", "main_dish_extra": "Ovos Fritos", "garnish": "Legumes Sauteé", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71286, "meal_type": "Jantar", "campus": "Sorocaba", "created_at": "2023-02-18T02:13:02.944204Z", "date": "2023-02-17", "main_dish_unrestricted": "Carne Moída à Primavera", "main_dish_vegetarian": "Feijão Branco ao Vinagrete", "main_dish_extra": "Ovos Fritos", "garnish": "Legumes Sauteé", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }, { "id": 71287, "meal_type": "Jantar", "campus": "Lagoa do Sino", "created_at": "2023-02-18T02:13:02.947845Z", "date": "2023-02-17", "main_dish_unrestricted": "Carne Moída à Primavera", "main_dish_vegetarian": "Feijão Branco ao Vinagrete", "main_dish_extra": "Ovos Fritos", "garnish": "Legumes Sauteé", "accompaniment": "Arroz Branco e Integral / Feijão", "salads": "Dois Tipos de Salada", "dessert": "Fruta", "juice": "Não Definido" }]);

  const handleListChange = (e) => {
    setList(e);
  }

  // useEffect(() => {
  //   fetch('https://petbcc.ufscar.br/ru_api/')
  //     .then(r => r.json())
  //     .then(data => handleListChange(data));
  // }, []);

  const meals = ['Almoço', 'Jantar'];
  // const dates = [moment().subtract(2, 'days'), moment().subtract(1, 'days'), moment()];
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

  console.log(list);
  console.log(menu);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', paddingTop: 40}}>
      <NavigationHeader navigation={navigation} title={'Restaurante Universitário'}/>
      <View style={{ flex:1, backgroundColor: '#fff' }}>
        <Tabs uppercase={false} mode='scrollable' style={{ backgroundColor: '#fff', alignItems:'center', marginLeft:'-200px', marginRight:'-200px'}} theme={{ colors: { primary: '#4B6076' } }}>
          {
            dates.map((date) => (
              <TabScreen label={date.format('DD/MM')} key={date.format()}>
                <Tabs uppercase={false} mode='scrollable' style={{ backgroundColor: '#fff', alignItems:'center', marginLeft:'-200px', marginRight:'-200px' }} theme={{ colors: { primary: '#4B6076' }}}>
                  {
                    meals.map((meal) => (
                      <TabScreen label={meal} key={meal}>
                        <div className='cardapio'>
                          {
                            info(menu[date.format('YYYY-MM-DD')][meal]).map((item) => (
                              <ItemCardapio className='cardapio-item'
                                key={item.title + item.subtitle}
                                title={item.title} subtitle={item.subtitle}
                                content={item.content} icon={icon(item.icon)} />
                            ))
                          }
                        </div>
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