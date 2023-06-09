// @ts-check
// @ts-ignore
import PREVIEW_ACTIVE_ORDERS from './PREVIEW_ACTIVE_ORDERS.json'

import orderPreviewAdapter from '../adapters/orderPreviewAdapter'

/**
 * @typedef {import('../types/OrderPreview').OrderPreview} PreviewOrder
 */

/**
 * @returns {Promise<PreviewOrder[]>}
 * @throws {Error}
 */
export default async function getPreviewActiveOrdersService() {
  return PREVIEW_ACTIVE_ORDERS.map((order) => orderPreviewAdapter(order))
}
