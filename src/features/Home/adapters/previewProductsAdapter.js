export default async function previewProductsAdapter({ productsData }) {
  const products =
    productsData?.map((product) => {
      const { idDrink, strDrink, strDrinkThumb } = product
      return {
        id: idDrink,
        name: strDrink,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        thumbnail: strDrinkThumb,
        size: 2,
        category: 'Pasta',
      }
    }) || []
  return products
}
