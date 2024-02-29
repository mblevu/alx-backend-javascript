const { getPaymentTokenFromAPI } = require('./6-payment_token');
const expect = require('chai').expect;

describe('getPaymentTokenFromAPI', () => {
    it('should return a successful response from the API when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.deep.equal({ "data": 'Successful response from the API' });
                done();
            })
            .catch((error) => {
                done(error);
            });
    });

    it('should return undefined when success is false', (done) => {
        getPaymentTokenFromAPI(false)
            .then((response) => {
                expect(response).to.be.undefined;
                done();
            })
            .catch((error) => {
                done(error);
            });
    });
});
