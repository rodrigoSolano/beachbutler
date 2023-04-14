import axios from 'axios'
import dishDetailAdapter from '../adapters/dishDetailAdapter'

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php`

export default async function getDishDetailService({ id }) {
  const { data } = await axios.get(url, {
    params: {
      i: id,
    },
  })

  const parsedData = dishDetailAdapter({ dishData: data.drinks[0] })

  return parsedData
}
