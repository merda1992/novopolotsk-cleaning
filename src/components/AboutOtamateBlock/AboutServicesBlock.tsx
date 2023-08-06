import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

import SwiperCore from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { DeviceSizes } from './types';
import { SLIDE_DELAY_SHORT_TEXT, SLIDE_TRANSITION_SPEED, SPACE_BETWEEN_SLIDES } from './constants';
import { useWindowWidth } from '../../hooks/useWindowWidth';

import BulkActions from './bulk-actions.png';
import Completeness from './completeness.png';
import Integrations from './integrations.png';
import MediaLibrary from './media-library.png';
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
} from './styled';

const carouselSlidesContent = [
  {
    id: 0,
    subTitle: 'landingPage.aboutOtomate.subTitleIntegrations',
    content: 'landingPage.aboutOtomate.contentIntegrations',
    imgUrl: Integrations,
    imgAlt: 'integrations',
  },
  {
    id: 1,
    subTitle: 'landingPage.aboutOtomate.subTitleMedia',
    content: 'landingPage.aboutOtomate.contentMedia',
    imgUrl: MediaLibrary,
    imgAlt: 'media-library',
  },
  {
    id: 2,
    subTitle: 'landingPage.aboutOtomate.subTitleBulk',
    content: 'landingPage.aboutOtomate.contentBulk',
    imgUrl: BulkActions,
    imgAlt: 'bulk-actions',
  },
  {
    id: 3,
    subTitle: 'landingPage.aboutOtomate.subTitleCompleteness',
    content: 'landingPage.aboutOtomate.contentCompleteness',
    imgUrl: Completeness,
    imgAlt: 'completeness',
  },
];

const COUNT_OF_SLIDES = 4;

const AboutServicesBlock = () => {
  const { t } = useTranslation();
  const windowWidth = useWindowWidth();

  const [swiper, setSwiper] = useState<SwiperCore>();
  const [activeNavItem, setActiveNavItem] = useState(swiper?.realIndex);

  SwiperCore.use([Pagination, Autoplay]);

  const handleSlideTo = (id: number) => {
    if (swiper) {
      setActiveNavItem(id);
      swiper.slideToLoop(id);
      swiper.autoplay.stop();
    }
  };

  const handleChangeSlide = (swiper: SwiperCore) => setActiveNavItem(swiper.realIndex);

  return (
    <StyledSpatialBlock id="about">
      <StyledAboutOtomateBlock>
        <StyledTitle variant="h2">{t('landingPage.aboutOtomate.title')}</StyledTitle>
        {windowWidth >= DeviceSizes.tablet ? (
          <StyledContainerContentBlock>
            <StyledBoxWithText>
              {carouselSlidesContent.map(({ subTitle, content, id }) => (
                <StyledContentBox key={id} onClick={() => handleSlideTo(id)} isActive={id === activeNavItem}>
                  <StyledSubTitle variant="h3">{t(subTitle)}</StyledSubTitle>
                  <StyledContent variant="subtitle1">{t(content)}</StyledContent>
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
                <StyledSubTitle paddingBottom="14px">{t(subTitle)}</StyledSubTitle>
                <StyledContent paddingBottom="42px">{t(content)}</StyledContent>
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
