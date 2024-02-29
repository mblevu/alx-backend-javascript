const Utils = {
    calculateNumber: function(a, b, type) {
        if (type === 'SUM') {
            return Math.round(a) + Math.round(b);
        } else if (type === 'SUBTRACT') {
            return Math.round(a) - Math.round(b);
        } else if (type === 'DIVIDE') {
            const roundedB = Math.round(b);
            if (roundedB === 0) {
                return 'Error';
            }
            return Math.round(a) / roundedB;
        }
    }
};

module.exports = Utils;
