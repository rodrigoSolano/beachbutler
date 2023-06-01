const DEFAULT_ALLERGIES = [
  { id: '11a79ef2-d4e4-4c1d-a114-b088a2e26433', name: 'Sauce - Marinara' },
  {
    id: '70b074b5-39d8-4a50-a916-b47348ad87d2',
    name: 'Piping - Bags Quizna',
  },
  { id: 'dfbf7759-664e-4353-aa99-e4d70821ee78', name: 'Dr. Pepper - 355ml' },
  {
    id: 'fef25172-3860-4b5c-9edb-236630703037',
    name: 'Table Cloth 72x144 White',
  },
  {
    id: '6d3210c7-bf48-47bd-b147-352f347819c0',
    name: 'Ham - Cooked Italian',
  },
  { id: 'e20d832b-b4ef-498d-9a91-4455ac2f5d23', name: 'Beef - Striploin' },
  { id: '8b02cb29-c749-4ec4-980b-d97cddd86fa6', name: 'Rice - Long Grain' },
  { id: 'ed856bc1-e82f-4e40-9449-229699229372', name: 'Bread - Pita, Mini' },
  { id: '0ef076ec-f48c-41df-8b5a-99c7c3377c71', name: 'Tea - Black Currant' },
  { id: '832c8202-01e2-460a-8e93-918b54d8e607', name: 'Energy Drink Bawls' },
  { id: '7901d2b9-de1c-40ed-b833-e758035304bb', name: 'Oil - Cooking Spray' },
  {
    id: '4cc5eb19-4b45-4b5a-af4d-326b2f255648',
    name: 'Mushroom - Trumpet, Dry',
  },
  { id: '160316f3-c330-44c3-8c87-e7554132f64d', name: 'Beef - Bresaola' },
  {
    id: 'c259e29d-c70c-4e29-be71-8bef21cbb0a4',
    name: 'Apple - Northern Spy',
  },
  { id: '573658ce-4d48-4784-8d85-b70389f807f1', name: 'Cakes Assorted' },
  { id: '42f31526-ae31-4d1d-b095-edfb15d5f384', name: 'Coconut - Whole' },
  {
    id: '6a3346e0-eb0e-46c1-a731-39a648bd95e5',
    name: 'Pepper - Black, Ground',
  },
  { id: '52ad5aec-5121-40a2-a99f-705146279a82', name: 'Turnip - White' },
  {
    id: 'ec105acf-1ba2-483b-b393-656a5b620eec',
    name: 'Beans - Fava, Canned',
  },
  { id: 'd149eab3-abab-4950-9c0c-6b3a9c5b1e88', name: 'Swiss Chard' },
]

export default async function getAllergiesService() {
  return DEFAULT_ALLERGIES
}
