import moment from 'moment'

const ORDERS = [
  {
    id: 1,
    name: 'Order 1',
    status: 'completed',
    products: [
      {
        id: 1,
        name: 'Omelette de verduras',
        date: moment(Date.now()).format('DD/MMM/YYYY'),
        time: moment(Date.now()).format('h:mm a'),
        status: 'En preparación',
        image: '/images/products/product_thumbnail_1.png',
        thumbnail: '/images/products/product_thumbnail_1.png',
      },
      {
        id: 2,
        name: 'Calabaza a la mostaza',
        date: moment(Date.now()).format('DD/MMM/YYYY'),
        time: moment(Date.now()).format('h:mm a'),
        status: 'Completa',
        image: '/images/products/product_thumbnail_1.png',
        thumbnail: '/images/products/product_thumbnail_1.png',
      },
      {
        id: 2,
        name: 'Pastel de frambuesa',
        date: moment(Date.now()).format('DD/MMM/YYYY'),
        time: moment(Date.now()).format('h:mm a'),
        status: 'Completa',
        image: '/images/products/product_thumbnail_1.png',
        thumbnail: '/images/products/product_thumbnail_1.png',
      },
    ],
    rating: null,
  },
  {
    id: 1,
    name: 'Order 1',
    status: 'completed',
    products: [
      {
        id: 1,
        name: 'Smoothie de manzana',
        date: moment(Date.now()).format('DD/MMM/YYYY'),
        time: moment(Date.now()).format('h:mm a'),
        status: 'Completa',
        image: '/images/products/product_thumbnail_1.png',
        thumbnail: '/images/products/product_thumbnail_1.png',
      },
    ],
    rating: 4.5,
  },
]

export default async function getOrdersService() {
  return ORDERS
}
