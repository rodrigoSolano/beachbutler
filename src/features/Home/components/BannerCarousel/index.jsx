import { Box } from '@mui/material'
import { Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import Banner from '../Banner'
import useBanners from '../../hooks/useBanners'

const breakpoints = {
  320: { slidesPerView: 1 },
  360: { slidesPerView: 1.1 },
  420: { slidesPerView: 1.08 },
  470: { slidesPerView: 1.069 },
  500: { slidesPerView: 1.069 },
  600: { slidesPerView: 1.055 },
}

export default function BannerCarousel() {
  const { banners, isLoading } = useBanners()

  return (
    <Box height={128} mx={-2}>
      <Swiper
        virtual
        modules={[Virtual]}
        autoplay={{ delay: 500 }}
        breakpoints={breakpoints}
        spaceBetween={8}
        slidesOffsetAfter={16}
        slidesOffsetBefore={16}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={banner} virtualIndex={index}>
            <Banner banner={banner} isLoading={isLoading} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
