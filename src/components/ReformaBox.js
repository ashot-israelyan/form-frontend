import React from 'react';
import BeforeAfterSlider from 'react-before-after-slider';
import { connect } from 'react-redux';
import { isServer } from '../store';
import slider1 from '../images/silder-compare-1.jpg';
import slider2 from '../images/silder-compare-2.jpg';

const ReformaBox = ({ screen: { layout, size } }) => {
  let compareSize = (size * 54) / 100;

  if (layout !== 'desktop') {
    compareSize = size - 50;
  }

  return (
    <div className={'reforma-box'}>
      <div className="top">
        <h2>Что такое реформа-бокс</h2>
        <hr className="divider" />
        <div className="description">
          Наши блюда вкусны и содержат весь набор сезонных витаминов, которые подарят вам свежесть и легкость. Почему?
        </div>
      </div>
      <div className="inner">
        <div className={'left'}>
          <div className="reform-desc top">
            <h4>Качествo продуктов</h4>
            <p>
              На кухне, где готовится реформа-бокс, мы используем только натуральную и органическую продукцию от
              надежных поставщиков и фермеров.
            </p>
          </div>

          <div className="reform-desc bottom">
            <h4>Специальные пакеты для хранения блуюд</h4>
            <p>We are looking for someone who thinks strategically.</p>
          </div>
        </div>

        <div className="center">
          {!isServer && (
            <BeforeAfterSlider
              before={slider1}
              after={slider2}
              width={compareSize}
              height={layout === 'mobile' ? 300 : 454}
              className={'compare-box'}
            />
          )}
        </div>

        <div className={'right'}>
          <div className="reform-desc top">
            <h4>Уникальные рецепты</h4>
            <p>
              Благодаря усердной работе наших поваров и диетологов, мы можем каждый день наслаждаться новыми блюдами,
              неожиданными рецептами, любимыми вкусами.
            </p>
          </div>

          <div className="reform-desc bottom">
            <h4>Точный расчет</h4>
            <p>
              Порции тщательно рассчитываются под вас - в зависимости от показателей веса, роста, образа жизни и
              профессиональной деятельности
            </p>
          </div>
        </div>
      </div>
      <div className={'select-plan'}>
        <button>Выбрать план</button>
      </div>
    </div>
  );
};

export default connect(({ settings }) => ({ screen: settings.screen }))(ReformaBox);
