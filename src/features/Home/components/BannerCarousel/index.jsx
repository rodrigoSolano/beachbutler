import React from 'react'
import { EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'

import Banner from './Banner'
import useBanners from '../../hooks/useBanners'
import BannerSkeleton from './BannerSkeleton'

export default function BannerCarousel() {
  const { banners, isLoading } = useBanners()

  return (
    <Swiper
      loop
      effect="fade"
      modules={[EffectFade]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <Banner banner={banner} />
        </SwiperSlide>
      ))}
      {isLoading && <BannerSkeleton />}
    </Swiper>
  )
}
