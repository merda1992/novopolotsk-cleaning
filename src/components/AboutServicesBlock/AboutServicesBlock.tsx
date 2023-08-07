import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { DeviceSizes } from './types';
import { SLIDE_DELAY_SHORT_TEXT, SLIDE_TRANSITION_SPEED, SPACE_BETWEEN_SLIDES } from './constants';
import { useWindowWidth } from '../../hooks/useWindowWidth';

import One from './1.jpg';
import Two from './2.jpg';
import Three from './3.jpg';
import Four from './4.jpg';
import Five from './5.jpg';
import Six from './6.jpg';

import {
  StyledSubTitle,
  StyledContent,
  StyledContentBox,
  StyledPicture,
  StyledAboutOtomateBlock,
  StyledTitle,
  StyledSliderContainer,
  StyledContainerContentBlock,
  StyledBoxWithText,
  StyledPictureMobileWrapper,
  StyledSpatialBlock,
  TextContainer,
} from './styled';

const carouselSlidesContent = [
  {
    id: 0,
    subTitle: 'services.one',
    content: 'prices.one',
    imgUrl: One,
    imgAlt: 'Удаление пыли со всех горизонтальных поверхностей',
  },
  {
    id: 1,
    subTitle: 'services.two',
    content: 'prices.two',
    imgUrl: Two,
    imgAlt: 'Очистка сухим способом мягкой мебели, ковров и ковровых покрытий',
  },
  {
    id: 2,
    subTitle: 'services.three',
    content: 'prices.three',
    imgUrl: Three,
    imgAlt: 'Генеральная уборка коттеджей и домов',
  },
  {
    id: 3,
    subTitle: 'services.four',
    content: 'prices.four',
    imgUrl: Four,
    imgAlt: 'Чистка кухонной плиты, удаление следов жира',
  },
  {
    id: 4,
    subTitle: 'services.five',
    content: 'prices.five',
    imgUrl: Five,
    imgAlt: 'Чистка и дезинфекция раковины, ванны, душевой кабины, джакузи и туалета',
  },
  {
    id: 5,
    subTitle: 'services.six',
    content: 'prices.six',
    imgUrl: Six,
    imgAlt: 'Мойка окон',
  },
];

const COUNT_OF_SLIDES = 4;

const AboutServicesBlock = () => {
  const { t } = useTranslation();
  const { windowWidth } = useWindowWidth();

  const [swiper, setSwiper] = useState<SwiperCore>();
  const [activeNavItem, setActiveNavItem] = useState(
    windowWidth > DeviceSizes.laptopS ? swiper?.realIndex || 0 : swiper?.realIndex,
  );

  SwiperCore.use([Pagination, Autoplay]);

  const handleSlideTo = (id: number) => {
    if (swiper) {
      setActiveNavItem(id);
      swiper.slideToLoop(id);
      swiper.autoplay.stop();
    }
  };

  useEffect(() => {
    if (windowWidth > DeviceSizes.tabletM) {
      setActiveNavItem(swiper?.realIndex);
    } else {
      setActiveNavItem(undefined);
    }
  }, [swiper?.realIndex, windowWidth]);

  const handleChangeSlide = (swiper: SwiperCore) => setActiveNavItem(swiper.realIndex);

  return (
    <StyledSpatialBlock id="about">
      <StyledAboutOtomateBlock>
        <StyledTitle variant="h2">{t('servicesAndPrices')}</StyledTitle>
        {windowWidth >= DeviceSizes.tabletM ? (
          <StyledContainerContentBlock>
            <StyledBoxWithText>
              {carouselSlidesContent.map(({ subTitle, content, id }) => (
                <StyledContentBox
                  key={id}
                  onClick={() => handleSlideTo(id)}
                  isactive={id === activeNavItem ? `${activeNavItem}` : ''}
                >
                  <StyledSubTitle variant="subtitle1">{t(subTitle)}</StyledSubTitle>
                  <StyledContent isactive={id === activeNavItem ? `${activeNavItem}` : ''} variant="h3">
                    {t(content)}
                  </StyledContent>
                </StyledContentBox>
              ))}
            </StyledBoxWithText>
            <StyledSliderContainer>
              <Swiper
                observer
                observeParents
                slidesPerView={1}
                speed={SLIDE_TRANSITION_SPEED}
                autoplay={{
                  delay: SLIDE_DELAY_SHORT_TEXT,
                }}
                loop
                onSwiper={setSwiper}
                onSlideChange={handleChangeSlide}
              >
                {carouselSlidesContent.map(({ imgUrl, imgAlt, id }) => (
                  <SwiperSlide key={id}>
                    <StyledPicture>
                      <img src={imgUrl} alt={imgAlt} loading="lazy" />
                    </StyledPicture>
                  </SwiperSlide>
                ))}
              </Swiper>
            </StyledSliderContainer>
          </StyledContainerContentBlock>
        ) : (
          <Swiper
            observer
            observeParents
            slidesPerView={1}
            speed={SLIDE_TRANSITION_SPEED}
            centeredSlides
            autoplay={{
              delay: SLIDE_DELAY_SHORT_TEXT,
            }}
            spaceBetween={SPACE_BETWEEN_SLIDES}
            loop
            className="slideWrapper"
            loopedSlides={COUNT_OF_SLIDES}
            pagination={{
              clickable: true,
              clickableClass: 'swiperPagination',
              bulletClass: 'swiperBullet',
              bulletActiveClass: 'swiperBulletActive',
            }}
          >
            {carouselSlidesContent.map(({ subTitle, content, imgUrl, imgAlt, id }) => (
              <SwiperSlide key={id}>
                <TextContainer>
                  <StyledSubTitle paddingBottom="14px">{t(subTitle)}</StyledSubTitle>
                  <StyledContent isactive={id === activeNavItem ? `${activeNavItem}` : ''} paddingBottom="42px">
                    {t(content)}
                  </StyledContent>
                </TextContainer>

                <StyledPictureMobileWrapper>
                  <img src={imgUrl} alt={imgAlt} />
                </StyledPictureMobileWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </StyledAboutOtomateBlock>
    </StyledSpatialBlock>
  );
};

export default AboutServicesBlock;
