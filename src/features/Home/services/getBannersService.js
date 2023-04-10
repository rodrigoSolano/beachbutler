const BANNERS = [
  {
    id: 'LONSndWhsd',
    image: '/images/banners/banner_1.jpg',
  },
  {
    id: 'SYW15PSrcM',
    image: '/images/banners/banner_2.jpg',
  },
]

export default async function getBannersService({
  pag = 0,
  num = 20,
  ord = 'name',
  asc = true,
}) {
  return new Promise((resolve) => {
    const sortedBanners = BANNERS.sort((a, b) => {
      if (a[ord] < b[ord]) return asc ? -1 : 1
      if (a[ord] > b[ord]) return asc ? 1 : -1
      return 0
    })
    const totalCount = sortedBanners.length
    const totalEdges = sortedBanners.slice(pag * num, pag * num + num).length
    const hasMore = pag * num + num < totalCount
    const edges = sortedBanners
      .slice(pag * num, pag * num + num)
      .map((node) => ({ node }))
    resolve({ totalCount, totalEdges, hasMore, pag, edges })
  })
}
