const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
        sinon.stub(Utils, 'calculateNumber').callsFake((name, totalAmount, totalShipping) => totalAmount + totalShipping);
    });

    afterEach(() => {
        consoleSpy.restore();
        sinon.restore();
    });

    it('should log the correct total and only call console once', () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(consoleSpy);
        sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');
    });

    it('should log the correct total and only call console once', () => {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledOnce(consoleSpy);
        sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');
    });
});
