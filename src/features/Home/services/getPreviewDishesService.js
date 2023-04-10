import axios from 'axios'
import previewDishesAdapter from '../adapters/previewDishesAdapter'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php'

export default async function getPreviewDishesService({
  filter: { section = 'Ordinary Drink' },
}) {
  const { data } = await axios.get(url, {
    params: {
      c: section,
    },
  })

  const dishes = await previewDishesAdapter({ dishesData: data.drinks })

  return dishes
}
