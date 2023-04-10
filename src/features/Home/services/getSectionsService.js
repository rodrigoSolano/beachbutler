const SECTIONS = [
  {
    id: '0a1b2c3d4e',
    label: 'Popular',
    value: 'popular',
    anchor: 'popular',
  },
  {
    id: '1a2b3c4d5e',
    label: 'Quick meals',
    value: 'quickMeals',
    anchor: 'quickMeals',
  },
  {
    id: '2a3b4c5d6e',
    label: 'Brunch',
    value: 'brunch',
    anchor: 'brunch',
  },
  {
    id: '3a4b5c6d7e',
    label: 'Thematic drinks',
    value: 'thematicDrinks',
    anchor: 'thematicDrinks',
  },
  {
    id: '4a5b6c7d8e',
    label: 'Desserts',
    value: 'desserts',
    anchor: 'desserts',
  },
  {
    id: '5a6b7c8d9e',
    label: 'Healthy',
    value: 'healthy',
    anchor: 'healthy',
  },
  {
    id: '6a7b8c9d0e',
    label: 'Vegetarian',
    value: 'vegetarian',
    anchor: 'vegetarian',
  },
]

export default function getSectionsService() {
  return SECTIONS
}
