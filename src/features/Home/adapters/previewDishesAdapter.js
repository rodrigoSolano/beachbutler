export default async function previewDishesAdapter({ dishesData }) {
  const dishes =
    dishesData?.map((dish) => {
      const { idDrink, strDrink, strDrinkThumb } = dish
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
  return dishes
}
