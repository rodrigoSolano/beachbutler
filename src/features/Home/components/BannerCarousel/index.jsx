import { Box } from '@mui/material'
import { Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import Banner from './Banner'
import useBanners from '../../hooks/useBanners'

export default function BannerCarousel() {
  const { banners, isLoading } = useBanners()

  return (
    <Box
      sx={{
        marginLeft: '-16px',
        marginRight: '-16px',
        width: '100%',
        height: 'auto',
        aspectRatio: '3/1',
      }}
    >
      <Swiper
        modules={[Virtual]}
        spaceBetween={8}
        slidesPerView={1.1}
        slidesOffsetAfter={16}
        slidesOffsetBefore={16}
        autoplay={{
          delay: 500,
        }}
        virtual
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
