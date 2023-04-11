import axios from 'axios'
import menuPreviewDishesAdapter from '../adapters/menuPreviewDishesAdapter'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php'

export default async function getMenuPreviewDishesService({
  filter: { section = 'Ordinary Drink' },
}) {
  const { data } = await axios.get(url, {
    params: {
      c: section,
    },
  })

  const dishes = await menuPreviewDishesAdapter({ dishesData: data.drinks })

  return dishes
}
