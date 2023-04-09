const DIET_RESTRICTIONS = [
  {
    id: 1,
    name: 'Gluten',
  },
  {
    id: 2,
    name: 'Lactose',
  },
  {
    id: 3,
    name: 'Egg',
  },
  {
    id: 4,
    name: 'Fish',
  },
  {
    id: 5,
    name: 'Peanut',
  },
  {
    id: 6,
    name: 'Soy',
  },
  {
    id: 7,
    name: 'Shellfish',
  },
  {
    id: 8,
    name: 'Tree nuts',
  },
  {
    id: 9,
    name: 'Wheat',
  },
  {
    id: 10,
    name: 'Sesame',
  },
  {
    id: 11,
    name: 'Milk',
  },
  {
    id: 12,
    name: 'Sulfites',
  },
  {
    id: 13,
    name: 'Mustard',
  },
  {
    id: 14,
    name: 'Celery',
  },
]

export default async function getDietRestrictionsService({
  pag = 0,
  num = 20,
  ord = 'name',
  asc = true,
}) {
  return new Promise((resolve) => {
    const sortedDietRestrictions = DIET_RESTRICTIONS.sort((a, b) => {
      if (a[ord] < b[ord]) return asc ? -1 : 1
      if (a[ord] > b[ord]) return asc ? 1 : -1
      return 0
    })
    const totalCount = sortedDietRestrictions.length
    const totalEdges = sortedDietRestrictions.slice(
      pag * num,
      pag * num + num
    ).length
    const hasMore = pag * num + num < totalCount
    const edges = sortedDietRestrictions
      .slice(pag * num, pag * num + num)
      .map((node) => ({ node }))
    resolve({ totalCount, totalEdges, hasMore, pag, edges })
  })
}
