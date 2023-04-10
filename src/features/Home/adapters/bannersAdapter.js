export default async function bannersAdapter(bannersData) {
  const banners = bannersData?.edges || []

  return banners.map((banner) => ({
    id: banner?.node?.id || 0,
    image: banner?.node?.image || 'No name',
  }))
}
