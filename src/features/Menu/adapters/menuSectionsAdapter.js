const cleanString = (str) => str.replace(/[^a-zA-Z]+/g, ' ')

export default async function menuSectionsAdapter({ sectionsData }) {
  return sectionsData.map((section) => {
    const { strCategory } = section
    const cleanCategory = cleanString(strCategory)
    const safeCategory = cleanCategory.replace(/ /g, '-')
    return {
      id: safeCategory,
      label: strCategory,
      value: strCategory,
      anchor: safeCategory,
    }
  })
}
