import { useCallback, useEffect, useMemo, useState } from 'react'

import useLocalStorage from 'hooks/useLocalStorage'

import { OrderContext, initialState } from './OrderContext'
import { RECEIVED } from './orderStatuses'

export default function OrderProvider({ children }) {
  const [localStorageOrder, saveOrder] = useLocalStorage('order', initialState)
  const [order, setOrder] = useState(initialState)
  const [localStorageOrders, saveOrders] = useLocalStorage('orders', [])

  useEffect(() => {
    setOrder(localStorageOrder)
  }, [localStorageOrder])

  const addProductToOrder = useCallback(
    ({ product, quantity }) => {
      // update order
      const item = { product, quantity }
      const newOrder = {
        ...order,
        products: [...(order?.products ?? []), item],
      }
      // save order
      saveOrder(newOrder)
    },
    [order, saveOrder]
  )

  const increaseProductQuantity = useCallback(
    (productId) => {
      // update order
      const newProducts = order.products.map((item) => {
        if (item.product.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        return item
      })
      const newOrder = {
        ...order,
        products: newProducts,
      }
      // save order
      saveOrder(newOrder)
    },
    [order, saveOrder]
  )

  const decreaseProductQuantity = useCallback(
    (productId) => {
      // update order
      const newProducts = order.products.map((item) => {
        if (item.product.id === productId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        }
        return item
      })
      const newOrder = {
        ...order,
        products: newProducts,
      }
      // save order
      saveOrder(newOrder)
    },
    [order, saveOrder]
  )

  const removeProductFromOrder = useCallback(
    (productId) => {
      // update order
      const newProducts = order.products.filter(
        (item) => item.product.id !== productId
      )
      const newOrder = {
        ...order,
        products: newProducts,
      }
      // save order
      saveOrder(newOrder)
    },
    [order, saveOrder]
  )

  const clearOrder = useCallback(() => {
    saveOrder(initialState)
  }, [saveOrder])

  const orderOrder = useCallback(() => {
    const newOrder = {
      ...order,
      status: RECEIVED,
      orderedAt: new Date(),
    }
    saveOrder(newOrder)
  }, [order, saveOrder])

  const rateOrder = useCallback(
    (rating) => {
      const newOrder = { ...order, rating }
      saveOrder(newOrder)
      saveOrders([...localStorageOrders, newOrder])
    },
    [localStorageOrders, order, saveOrder, saveOrders]
  )

  const memorizedState = useMemo(
    () => ({
      order,
      addProductToOrder,
      increaseProductQuantity,
      decreaseProductQuantity,
      removeProductFromOrder,
      clearOrder,
      orderOrder,
      rateOrder,
    }),
    [
      order,
      addProductToOrder,
      increaseProductQuantity,
      decreaseProductQuantity,
      removeProductFromOrder,
      clearOrder,
      orderOrder,
      rateOrder,
    ]
  )

  return (
    <OrderContext.Provider value={memorizedState}>
      {children}
    </OrderContext.Provider>
  )
}
