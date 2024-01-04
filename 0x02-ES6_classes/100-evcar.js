#!/usr/bin/node
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    if (typeof newRange === 'number') {
      this._range = newRange;
    } else {
      throw new Error('Range must be a number');
    }
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color, this._range);
  }
}
