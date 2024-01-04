#!/usr/bin/node
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (!(typeof newAmount === 'number')) {
      throw new Error('Amount must be a number');
    } else {
      this._amount = newAmount;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new Error('Currency must be a Currency');
    } else {
      this._currency = newCurrency;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (!(typeof amount === 'number')) {
      throw new Error('Amount must be a number');
    }
    if (!(typeof conversionRate === 'number')) {
      throw new Error('ConversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
