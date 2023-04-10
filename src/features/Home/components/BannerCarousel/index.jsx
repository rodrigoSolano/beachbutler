import { Box } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'

import Banner from './Banner'
import useBanners from '../../hooks/useBanners'
import BannerSkeleton from './BannerSkeleton'

export default function BannerCarousel() {
  const { banners, isLoading } = useBanners()

  return (
    <Box sx={{ marginLeft: '-16px', marginRight: '-16px' }}>
      <Swiper
        spaceBetween={8}
        slidesPerView={1.1}
        slidesOffsetAfter={16}
        slidesOffsetBefore={16}
        autoplay={{
          delay: 500,
        }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Banner banner={banner} />
          </SwiperSlide>
        ))}
        {isLoading && <BannerSkeleton />}
      </Swiper>
    </Box>
  )
}
