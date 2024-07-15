const crypto = require('crypto');

const CryptoUtils = {
    generateKey: () => {
        return crypto.randomBytes(32); // 256 bits
    },

    calculateHMAC: (key, message) => {
        return crypto.createHmac('sha256', key).update(message).digest('hex');
    }
};

module.exports = CryptoUtils;
