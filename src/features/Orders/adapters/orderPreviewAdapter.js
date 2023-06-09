//  @ts-check
import { OrderStatus } from '../types/Order'

/**
 * @typedef {import('../types/OrderPreview').OrderPreview} OrderPreview
 */

/**
 * @param {any} rawStatus
 * @returns {OrderStatus}
 */
export function getOrderStatus(rawStatus) {
  switch (rawStatus) {
    case 'placed':
      return OrderStatus.PLACED
    case 'being_prepared':
      return OrderStatus.BEING_PREPARED
    case 'on_its_way':
      return OrderStatus.ON_ITS_WAY
    case 'delivered':
      return OrderStatus.DELIVERED
    default:
      throw new Error(`Unknown order status: ${rawStatus}`)
  }
}

/**
 * @param {any} rawOrderPreview
 * @returns {OrderPreview}
 */
export default function orderPreviewAdapter(rawOrderPreview) {
  return {
    id: rawOrderPreview.id,
    number: rawOrderPreview.orderNumber,
    status: getOrderStatus(rawOrderPreview.status),
    orderDate: rawOrderPreview.orderDate,
    thumbnail: rawOrderPreview.thumbnail,
    rating: rawOrderPreview.rating ?? 0,
  }
}
