import { createContext } from 'react'
import { CREATING } from './orderStatuses'

export const initialState = {
  status: CREATING,
  products: [],
  orderedAt: null,
}

export const OrderContext = createContext(initialState)
