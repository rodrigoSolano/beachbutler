import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ScrollSearchbar from 'components/ScrollSearchbar'
import Sections from 'components/Sections'
import Section from 'components/Section'
import AuthLayout from 'components/AuthLayout'

import BannerCarousel from 'features/Home/components/BannerCarousel'
import OrderStatus from 'components/OrderStatus'
import RateYourOrder from 'components/RateYourOrder'
import ProductsPreviewCarousel from 'features/Home/components/ProductsPreviewCarousel'

import useOrder from 'context/Order/useOrder'
import CartButton from 'components/CartButton'
import { CREATING, DELIVERED } from 'context/Order/orderStatuses'

import getHomeSectionsService from 'features/Home/services/getHomeSectionsService'

export default function Home({ sections }) {
  const { order, rateOrder } = useOrder()
  const showOrderStatus = order?.status !== CREATING && order.products?.length
  const showCartButton = order.status === CREATING && order.products.length
  const [showRateOrder, setShowRateOrder] = useState(false)

  const handleRateOrder = (rating) => {
    rateOrder(rating)
    setTimeout(() => {
      setShowRateOrder(false)
    }, 1000)
  }

  const handleCloseRating = () => {
    setShowRateOrder(false)
  }

  useEffect(() => {
    if (order.status === DELIVERED) setShowRateOrder(true)
  }, [order])

  return (
    <>
      <ScrollSearchbar />
      {showOrderStatus && <OrderStatus />}
      <Box height={24} />
      <BannerCarousel />
      <Sections sections={sections} />
      {sections.map((section) => (
        <Section section={section} key={section.id}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            {section.label}
          </Typography>
          <ProductsPreviewCarousel section={section} />
        </Section>
      ))}
      <Box height={16} />
      {showCartButton && <CartButton />}
      {showRateOrder && (
        <RateYourOrder onRate={handleRateOrder} onClose={handleCloseRating} />
      )}
    </>
  )
}

Home.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  const sections = await getHomeSectionsService({})
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      locale,
      sections,
    },
  }
}
