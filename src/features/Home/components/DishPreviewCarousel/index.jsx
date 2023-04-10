import { Box } from '@mui/material'
import { Virtual } from 'swiper'
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
    <Box sx={{ marginLeft: '-16px', marginRight: '-16px' }}>
      <Swiper
        modules={[Virtual]}
        spaceBetween={8}
        slidesPerView={2.3}
        slidesOffsetAfter={16}
        slidesOffsetBefore={16}
        virtual
      >
        {dishes.map((dish, index) => (
          <SwiperSlide key={dish} virtualIndex={index}>
            <DishPreviewCard dish={dish} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
