/* eslint-disable no-plusplus */

const getTags = (productData) => {
  if (productData.strTags) return productData.strTags.split(',')
  if (productData.strCategory) return productData.strCategory.split(',')

  return []
}
const getIngredients = (productData) => {
  const ingrts = []
  for (let i = 1; i <= 15; i++) {
    const ingredient = productData[`strIngredient${i}`]
    if (ingredient) ingrts.push(ingredient)
  }
  return ingrts.filter((ingredient) => ingredient !== null)
}

export default async function productDetailAdapter({ productData }) {
  const tags = getTags(productData)
  const ingredients = getIngredients(productData)
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
    id: productData.idDrink || '',
    name: productData.strDrink || '',
    description: productData.strInstructions || '',
    image: productData.strDrinkThumb || '',
    tags,
    ingredients,
    nutrition,
  }
}
