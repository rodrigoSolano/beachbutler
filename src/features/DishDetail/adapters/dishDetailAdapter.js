/* eslint-disable no-plusplus */

const getTags = (dishData) => {
  if (dishData.strTags) return dishData.strTags.split(',')
  if (dishData.strCategory) return dishData.strCategory.split(',')

  return []
}
const getIngredients = (dishData) => {
  const ingrts = []
  for (let i = 1; i <= 15; i++) {
    const ingredient = dishData[`strIngredient${i}`]
    if (ingredient) ingrts.push(ingredient)
  }
  return ingrts.filter((ingredient) => ingredient !== null)
}

export default async function dishDetailAdapter({ dishData }) {
  const tags = getTags(dishData)
  const ingredients = getIngredients(dishData)
  const nutrition = [
    {
      name: 'Calories',
      value: '300',
      unit: 'g',
    },
    {
      name: 'Protein',
      value: '30',
      unit: 'g',
    },
    {
      name: 'Fat',
      value: '30',
      unit: 'g',
    },
    {
      name: 'Carbohydrates',
      value: '30',
      unit: 'g',
    },
  ]

  return {
    id: dishData.idDrink || '',
    name: dishData.strDrink || '',
    description: dishData.strInstructions || '',
    image: dishData.strDrinkThumb || '',
    tags,
    ingredients,
    nutrition,
  }
}
