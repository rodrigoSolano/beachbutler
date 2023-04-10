import { Box } from '@mui/material'
import { Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import DishPreviewCard from '../DishPreviewCard'
import usePreviewDishes from '../../hooks/usePreviewDishes'

const breakpoints = {
  320: { slidesPerView: 2 },
  325: { slidesPerView: 2.01 },
  330: { slidesPerView: 2.05 },
  335: { slidesPerView: 2.1 },
  340: { slidesPerView: 2.15 },
  345: { slidesPerView: 2.2 },
  360: { slidesPerView: 2.3 },
  375: { slidesPerView: 2.3 },
  385: { slidesPerView: 2.35 },
  395: { slidesPerView: 2.4 },
  400: { slidesPerView: 2.45 },
  410: { slidesPerView: 2.5 },
  415: { slidesPerView: 2.57 },
  420: { slidesPerView: 2.6 },
  425: { slidesPerView: 2.65 },
  430: { slidesPerView: 2.7 },
  460: { slidesPerView: 2.8 },
  480: { slidesPerView: 2.9 },
  495: { slidesPerView: 2.95 },
  505: { slidesPerView: 3 },
  515: { slidesPerView: 3.1 },
  525: { slidesPerView: 3.2 },
  540: { slidesPerView: 3.3 },
  560: { slidesPerView: 3.4 },
  580: { slidesPerView: 3.5 },
  600: { slidesPerView: 3.6 },
}

export default function DishPreviewCarousel({ section }) {
  const { dishes, isLoading } = usePreviewDishes({
    sectionId: section.id,
  })

  return (
    <Box sx={{ marginLeft: '-16px', marginRight: '-16px', minHeight: 237 }}>
      <Swiper
        virtual
        modules={[Virtual]}
        breakpoints={breakpoints}
        spaceBetween={8}
        slidesOffsetAfter={16}
        slidesOffsetBefore={16}
      >
        {dishes.map((dish, index) => (
          <SwiperSlide key={dish} virtualIndex={index}>
            <DishPreviewCard dish={dish} isLoading={isLoading} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
