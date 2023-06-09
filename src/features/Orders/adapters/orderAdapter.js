// @ts-check
import { getOrderStatus } from './orderPreviewAdapter'

/**
 * @typedef {import('../types/Order').Order} Order
 * @typedef {import('../types/Order').OrderProduct} Product
 * @typedef {import('../types/Order').OrderItem} OrderItem
 */

/**
 * @param {Object} rawItems
 * @returns {OrderItem[]}
 */
export function getOrderItems(rawItems) {
  return rawItems.map((rawItem) => ({
    id: rawItem.id,
    quantity: rawItem.quantity,
    product: {
      id: rawItem.product.id,
      name: rawItem.product.name,
      description: rawItem.product.description,
      thumbnail: rawItem.product.thumbnail,
    },
  }))
}

/**
 * @param {Object} rawOrder
 * @returns {Order}
 */
export default function orderAdapter(rawOrder) {
  return {
    id: rawOrder.id,
    number: rawOrder.number,
    status: getOrderStatus(rawOrder.status),
    orderDate: rawOrder.orderDate,
    thumbnail: rawOrder.thumbnail,
    rating: rawOrder.rating,
    items: getOrderItems(rawOrder.items),
  }
}
