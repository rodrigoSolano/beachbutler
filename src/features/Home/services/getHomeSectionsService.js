// @ts-check
import axios from 'axios'
import sectionsAdapter from '../adapters/sectionsAdapter'

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
export default async function getHomeSectionsService() {
  const { data } = await axios.get(url)
  const { drinks } = data
  const sections = await sectionsAdapter({
    sectionsData: drinks,
  })
  return sections
}
