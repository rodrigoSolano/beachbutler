// @ts-check
import axios from 'axios'
import menuSectionsAdapter from '../adapters/menuSectionsAdapter'

/**
 * @typedef {Object} Section
 * @property {string} id
 * @property {string} name
 * @property {string} value
 */
const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

/**
 * @returns {Promise<Section[]>}
 */
export default async function getMenuSectionsService() {
  const { data } = await axios.get(url)
  const { drinks } = data
  const sections = await menuSectionsAdapter({
    sectionsData: drinks,
  })

  return sections.slice(0, 5)
}
