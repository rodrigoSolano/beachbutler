import { Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'

import DishPreviewCard from '../DishPreviewCard'
import usePreviewDishes from '../../hooks/usePreviewDishes'

export default function DishPreviewCarousel({ section }) {
  const { dishes } = usePreviewDishes({
    sectionId: section.id,
  })

  return (
    <Swiper loop slidesPerView={2}>
      {dishes.map((dish) => (
        <SwiperSlide key={dish.id}>
          <Box sx={{ padding: '0 8px' }}>
            <DishPreviewCard dish={dish} />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
