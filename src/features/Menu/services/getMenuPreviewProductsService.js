import axios from 'axios'
import menuPreviewProductsAdapter from '../adapters/menuPreviewProductsAdapter'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php'

export default async function getMenuPreviewProductsService({
  filter: { section = 'Ordinary Drink' },
}) {
  const { data } = await axios.get(url, {
    params: {
      c: section,
    },
  })

  const products = await menuPreviewProductsAdapter({
    productsData: data.drinks,
  })

  return products
}
