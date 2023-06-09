/* eslint-disable import/prefer-default-export */
// @ts-check

/**
 * @enum {string}
 * @readonly
 */
export const OrderStatus = {
  PLACED: 'placed',
  BEING_PREPARED: 'being_prepared',
  ON_ITS_WAY: 'on_its_way',
  DELIVERED: 'delivered',
}

/**
 * @typedef {Object} OrderProduct
 * @property {string} id - Product ID
 * @property {string} name - Product name
 * @property {string} description - Product description
 * @property {string} thumbnail - Product thumbnail
 */

/**
 * @typedef {Object} OrderItem
 * @property {string} id - Order item ID
 * @property {number} quantity - Quantity
 * @property {OrderProduct} product - Product
 */

/**
 * @typedef {Object} Order
 * @property {string} id - Order ID
 * @property {number} number - Order number
 * @property {OrderStatus} status - Order status
 * @property {string} orderDate - Order date
 * @property {string} thumbnail - Order thumbnail
 * @property {number} rating - Order rating
 * @property {OrderItem[]} items - Order items
 */
export const Order = {}
