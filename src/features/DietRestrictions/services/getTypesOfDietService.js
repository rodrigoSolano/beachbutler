const DEFAULT_TYPES_OF_DIET = [
  { id: '487f13bb-0024-4a88-8352-04bfde0db637', name: 'Vegan' },
  { id: '59be1753-c045-4af7-96e8-07634688bacb', name: 'Vegetarian' },
  { id: '5599b218-70fa-447c-86fa-adaf17ec4f07', name: 'Ketogenic' },
  { id: 'b5b5ca1f-66b4-4080-99c2-e36722599d9c', name: 'Pescatarian' },
]

export default async function getTypesOfDietService() {
  return DEFAULT_TYPES_OF_DIET
}
