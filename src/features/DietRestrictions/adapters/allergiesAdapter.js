export default async function allergiesAdapter(allergiesData) {
  const allergies = allergiesData?.edges || []

  return allergies.map((allergy) => ({
    id: allergy?.node?.id || 0,
    name: allergy?.node?.name || 'No name',
  }))
}
