import { useState } from 'react';
import * as Icon from 'react-feather';
import './slider.scss';

const ImageSlider: React.FC = () => {
  const arr = [
    {
      id: '1',
      src:
        'https://belarusgid.by/wp-content/uploads/2015/05/DSC_0475-e1474367178548.jpg',
      thumbnail:
        'https://belarusgid.by/wp-content/uploads/2015/05/DSC_0475-e1474367178548.jpg',
      caption: 'Церковь Успения в Сарье',
    },
    {
      id: '2',
      src:
        'https://ds05.infourok.ru/uploads/ex/11df/001128de-734e2ed0/hello_html_m2951a229.jpg',
      thumbnail:
        'https://ds05.infourok.ru/uploads/ex/11df/001128de-734e2ed0/hello_html_m2951a229.jpg',
      caption: 'Брестская крепость',
    },
    {
      id: '3',
      src: 'https://zviazda.by/sites/default/files/127135_800.jpg',
      thumbnail: 'https://zviazda.by/sites/default/files/127135_800.jpg',
      caption: 'Березинский заповедник',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(arr[0]);

  /* const toggleFullscreen = () => {
    const isInFullScreen =
      document.fullscreenElement && document.fullscreenElement !== null;
    const docElm = document.documentElement;
    if (!isInFullScreen) {
      if (docElm.requestFullscreen) docElm.requestFullscreen();
    } else if (document.exitFullscreen) document.exitFullscreen();
  }; */

  return (
    <div className="imageSlider">
      <div className="imageSlider_content">
        <div className="imageSlider_arrows_left">
          <Icon.ChevronLeft />
        </div>
        {arr.map((slide) => {
          return (
            <div className="imageSlider_item" key={slide.id}>
              <img src={slide.src} alt="" />
            </div>
          );
        })}
        <div className="imageSlider_arrows_right">
          <Icon.ChevronRight />
        </div>
      </div>
      <div className="imageSlider_count">
        {arr.map(() => (
          <div className="imageSlider_count_item" />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
