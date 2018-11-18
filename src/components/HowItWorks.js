import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HowItWorks = () => (
  <div className={'how-it-works'}>
    <div className={'top'}>
      <h2>How it works</h2>
      <hr className={'divider'} />
    </div>
    <div className={'inner'}>
      <div className={'first how-it-works-item'}>
        <div className={'left'}>
          <span className={'number'}>1</span>
          <FontAwesomeIcon icon={'envelope'} className={'custom-icon'} />
        </div>
        <div className={'right'}>
          <h3>Ваше личное меню</h3>
          <p>
            Заполните простой калькулятор параметров тела. А наши повара и диетологи предложат вкусное и полезное
            индивидуальное меню.
          </p>
        </div>
      </div>
      <div className={'second how-it-works-item'}>
        <div className={'left'}>
          <span className={'number'}>2</span>
          <FontAwesomeIcon icon={'truck'} className={'custom-icon'} />
        </div>
        <div className={'right'}>
          <h3>Доставка</h3>
          <p>Заказ доставляется прямо с кухни по заранее согласованному графику</p>
        </div>
      </div>
      <div className={'third how-it-works-item'}>
        <div className={'left'}>
          <span className={'number'}>3</span>
          <FontAwesomeIcon icon={'clone'} className={'custom-icon'} />
        </div>
        <div className={'right'}>
          <h3>Наслаждайся здоровьем</h3>
          <p>
            Легкость, бодрость и уверенность в себе станут вашими постоянными спутниками. Правильное питание должно быть
            полезным и вкусным. Уже через неделю ты почувствуешь разницу.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;
