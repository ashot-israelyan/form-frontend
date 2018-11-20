import React from 'react';
import StackGrid from 'react-stack-grid';
import { connect } from 'react-redux';

import boxImage1 from '../images/reforma-box-1.png';
import boxImage2 from '../images/reforma-box-2.png';
import boxImage3 from '../images/reforma-box-3.png';
import boxImage4 from '../images/reforma-box-4.png';
import boxImage5 from '../images/reforma-box-5.png';

class ReformaBoxes extends React.Component {
  constructor() {
    super();

    this.state = {
      suggestion: '5 дней',
    };
    this.options = ['5 дней', 'Неделя', 'Месяц'];
  }

  setColumnWidth() {
    const { size } = this.props;
    if (size <= 575) {
      return '100%';
    } else if (size <= 992) {
      return '50%';
    } else {
      return '33.33%';
    }
  }

  render() {
    const { suggestion } = this.state;
    return (
      <div className={'reforma-boxes'}>
        <div className="top">
          <h2>Реформа-Боксы</h2>
          <hr className="divider" />
          <div className="description">
            We use eggs in so many recipes. They are a staple in the kitchen. An egg can be cooked alone – boiled,
            poached, fried, scrambled.
          </div>
        </div>
        <div className="inner">
          <StackGrid columnWidth={this.setColumnWidth()} gutterWidth={30} gutterHeight={30}>
            <div className={'box'}>
              <div className="image">
                <img src={boxImage1} alt={'Reforma box'} />
              </div>
              <div className="container">
                <h4>Сбросить вес</h4>
                <p>We are looking for experienced 3D designers, so whether.</p>
                <button>Выбрать</button>
              </div>
            </div>
            <div className={'box'}>
              <div className="image">
                <img src={boxImage2} alt={'Reforma box'} />
              </div>
              <div className="container">
                <h4>Набрать вес</h4>
                <p>We are looking for experienced 3D designers, so whether.</p>
                <button>Выбрать</button>
              </div>
            </div>
            <div className={'box'}>
              <div className="image">
                <img src={boxImage3} alt={'Reforma box'} />
              </div>
              <div className="container">
                <h4>Здоровое питание</h4>
                <p>We are looking for experienced 3D designers, so whether.</p>
                <button>Выбрать</button>
              </div>
            </div>
            <div className={'box'}>
              <div className="image">
                <img src={boxImage4} alt={'Reforma box'} />
              </div>
              <div className="container">
                <h4>Детокс</h4>
                <p>We are looking for experienced 3D designers, so whether.</p>
                <button>Выбрать</button>
              </div>
            </div>
            <div className={'box try'}>
              <div className="image">
                <img src={boxImage5} alt={'Reforma box'} />
              </div>
              <div className="container">
                <h4>Попробуй*</h4>
                <p>This is a unique opportunity to join a leading design agency</p>
                <button>Выбрать</button>
              </div>
            </div>
            <div className={'suggestions'}>
              <div className={'options'}>
                {this.options.map(option => (
                  <div
                    key={option}
                    className={`option ${option === suggestion ? 'active' : ''}`}
                    onClick={() => this.setState({ suggestion: option })}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <div className="container">
                <h5>Выбранный план</h5>
                <h4>Сбросить вес</h4>
                <p className={'amount'}>
                  на <span>{suggestion}</span>
                </p>
                <p className={'desc'}>Включает в себе завтрак, обед, полдник, ужин, сок</p>
                <div className={'price'}>
                  Цена <strong>39 000 Драм</strong>
                </div>
                <button>Заказать</button>
              </div>
            </div>
          </StackGrid>
          <p className={'order-info'}>*This plan you can use only once</p>
        </div>
      </div>
    );
  }
}

export default connect(({ settings: { screen } }) => ({ size: screen.size }))(ReformaBoxes);
