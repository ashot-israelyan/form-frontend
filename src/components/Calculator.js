import React, { Component } from 'react';
import calculator1 from '../images/calculator-1.png';
import calculator2 from '../images/calculator-2.png';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const sliderStyles = {
  handleStyle: { width: 20, height: 20, border: 'solid 5px #a368c5' },
  trackStyle: { height: 10, backgroundColor: '#a368c5' },
  railStyle: { height: 10 },
};

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      age: 37,
      weight: 79,
      height: 182,
      gym: 'none',
      calories: 1860,
    };

    this.gymDays = ['none', '1 - 2 дней', '3 - 4 дней', '5 и больше'];
  }

  render() {
    const { age, weight, height, gym, calories } = this.state;
    return (
      <div className={'calculator-container'}>
        <img src={calculator1} alt="Calculator" className={'calculator-image-top'} />
        <div className="top">
          <h2>Калькулятор параметров тела</h2>
          <hr className={'divider'} />
          <div className="description">
            We use eggs in so many recipes. They are a staple in the kitchen. An egg can be cooked alone.
          </div>
        </div>
        <div className={'calculator'}>
          <div className="inner">
            <div className="left">
              <div className={'age slider'}>
                <div className={'container'}>
                  <h4>Возраст</h4>
                  <h3>{age} лет</h3>
                </div>
                <Slider
                  min={0}
                  max={130}
                  defaultValue={36}
                  {...sliderStyles}
                  onChange={e => this.setState({ age: e })}
                />
              </div>
              <div className={'weight slider'}>
                <div className={'container'}>
                  <h4>Вес</h4>
                  <h3>{weight} кг</h3>
                </div>
                <Slider
                  min={0}
                  max={200}
                  defaultValue={79}
                  {...sliderStyles}
                  onChange={e => this.setState({ weight: e })}
                />
              </div>
            </div>
            <div className="right">
              <div className={'height slider'}>
                <div className={'container'}>
                  <h4>Рост</h4>
                  <h3>{height} см</h3>
                </div>
                <Slider
                  min={0}
                  max={300}
                  defaultValue={182}
                  {...sliderStyles}
                  onChange={e => this.setState({ height: e })}
                />
              </div>
              <div className={'gym-calendar'}>
                <h4>Календарь спортзала</h4>
                <div className={'gym-labels'}>
                  {this.gymDays.map(option => (
                    <span
                      key={option}
                      className={`label ${option === gym ? 'active' : ''}`}
                      onClick={() => this.setState({ gym: option })}
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="results">
            <div className="left">
              <h4><strong>{calories}</strong> калорий/день</h4>
              <p>Ваш основной ежедневный nutriton</p>
            </div>
            <div className={'right'}>
              <button>Показать результат</button>
            </div>
          </div>
        </div>
        <img src={calculator2} alt={'Calculator of weight'} className={'calculator-image-bottom'} />
      </div>
    );
  }
}

export default Calculator;
