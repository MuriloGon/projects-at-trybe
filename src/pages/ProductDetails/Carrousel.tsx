/* eslint-disable react/prop-types */
import React, { FC } from 'react';

import SwiperCore, {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

import { Product } from '../../helpers/mercadolibre/product';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Carrousel: FC<{ product: Product | null }> = ({ product }) => (
  <Swiper
    navigation
    loop
    grabCursor
    pagination={{ clickable: true }}
  >
    {product?.pictures.map(({ id, url }) => (
      <SwiperSlide key={id}>
        <img src={url} alt={id} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Carrousel;
