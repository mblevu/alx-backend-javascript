const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should use the same math as Utils.calculateNumber', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);
    });

    it('should call console.log once', () => {
        const consoleSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(consoleSpy);
    });

    it('should call console.log with any argument', () => {
        const consoleSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(consoleSpy);
    });

    it('should call console.log with the right message', () => {
        const consoleSpy = sinon.spy(console, 'log');
        total = sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(consoleSpy, `The total is: ${total}`);
    });
});

