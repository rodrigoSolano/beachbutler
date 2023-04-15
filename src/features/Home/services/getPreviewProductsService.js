import axios from 'axios'
import previewProductsAdapter from '../adapters/previewProductsAdapter'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php'

export default async function getPreviewProductsService({
  filter: { section = 'Ordinary Drink' },
}) {
  const { data } = await axios.get(url, {
    params: {
      c: section,
    },
  })

  const products = await previewProductsAdapter({ productsData: data.drinks })

  return products
}
