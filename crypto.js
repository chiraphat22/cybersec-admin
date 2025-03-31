const crypto = require("crypto-js")

const my_password= "mypass";
const my_key= 'lovemelovemycat';
//
const encode = crypto.AES.encrypt(my_password, my_key);
console.log('encode', encode.toString())