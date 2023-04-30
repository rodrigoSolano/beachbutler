import { useContext } from 'react'
import { OrderContext } from './OrderContext'

export default function useOrder() {
  const context = useContext(OrderContext)

  if (context === undefined)
    throw new Error('useOrder must be used within a OrderProvider')

  return context
}
