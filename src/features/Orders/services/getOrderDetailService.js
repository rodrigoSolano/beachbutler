// @ts-check
// @ts-ignore
import ORDERS from './ORDERS.json'
import orderAdapter from '../adapters/orderAdapter'

/**
 * @typedef {import('../types/Order').Order} Order
 */

/**
 *
 * @param {string} orderId
 * @returns {Promise<Order>}
 * @throws {Error}
 */
export default async function getOrderDetailService(orderId) {
  const order = ORDERS.find((_order) => _order.id === orderId)
  if (!order) throw new Error('Order not found')
  return orderAdapter(order)
}
