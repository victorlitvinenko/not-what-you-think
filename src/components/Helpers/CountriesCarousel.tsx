import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import '../Country/country.scss';

const CountriesCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div
          className="carousel-img"
          style={{
            background:
              'url(https://luckclub.ru/images/luckclub/2018/08/s1200-4.jpg)',
          }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="carousel-img"
          style={{
            background:
              'url(https://m.fishki.net/upload/users/2020/05/12/482/214decef8fb9932f637e5c1c0b837ece.jpg)',
          }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CountriesCarousel;
