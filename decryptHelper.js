var crypto = require('crypto');

const decrypt = function (text, password) {
    try {
        var decipher = crypto.createDecipher('aes-256-cbc', password);
        var decrypted = decipher.update(text.toString(), 'hex', 'utf8') + decipher.final('utf8');
        return decrypted;
    } catch (exception) {
        let err = 'Bad input string'
        return err;
    }
}

module.exports = decrypt