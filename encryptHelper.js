"use strict";
var crypto = require('crypto');

const encrypt = function(text, password) {
    try{
        var cipher = crypto.createCipher('aes-256-cbc', password);
        var encrypted = cipher.update(text.toString(),'utf8','hex') + cipher.final('hex');
        return encrypted;
        } catch(exception) {
          throw exception;
        }
}

module.exports = encrypt