// @ts-check
// @ts-ignore
import ORDER_HISTORY from './ORDER_HISTORY.json'

import orderPreviewAdapter from '../adapters/orderPreviewAdapter'

/**
 * @typedef {import('../types/OrderPreview').OrderPreview} OrderPreview
 */

/**
 * @returns {Promise<OrderPreview[]>}
 */
export default async function getPreviewOrderHistory() {
  return ORDER_HISTORY.map((rawOrder) => orderPreviewAdapter(rawOrder))
}
