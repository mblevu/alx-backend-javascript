const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should use the same math as Utils.calculateNumber', () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
    });

});
