import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

function Recommendations({ recommendationsList, inverseType }) {
  const url = (id) => (inverseType === 'meals' ? `/comidas/${id}/` : `/bebidas/${id}/`);
  return (
    <section>
      <h2>Recomendadas</h2>
      <Swiper
        spaceBetween={ 0 }
        slidesPerView={ 1 }
      >
        {recommendationsList.map(({ title, subtitle, imgUrl, id }, index) => (
          <SwiperSlide className="teste" key={ `recommanded-${id}` }>
            <Link key={ `recommanded-${id}` } to={ url(id) }>
              <div
                data-testid={ `${index}-recomendation-card` }
              >
                <img src={ imgUrl } alt={ title } />
                <h3>{subtitle}</h3>
                <h2 data-testid={ `${index}-recomendation-title` }>{title}</h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

Recommendations.propTypes = {
  recommendationsList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imgUrl: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
  inverseType: PropTypes.string.isRequired,
};

export default Recommendations;
