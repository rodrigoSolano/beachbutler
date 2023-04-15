import axios from 'axios'
import productDetailAdapter from '../adapters/productDetailAdapter'

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php`

export default async function getProductDetailService({ id }) {
  const { data } = await axios.get(url, {
    params: {
      i: id,
    },
  })

  const parsedData = productDetailAdapter({ productData: data.drinks[0] })

  return parsedData
}
