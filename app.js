var ethers = require('ethers');
// var crypto = require('crypto');

// var id = crypto.randomBytes(32).toString('hex');
// var privateKey = "0x" + id;
// console.log("SAVE BUT DO NOT SHARE THIS:", privateKey);

// var wallet = new ethers.Wallet(privateKey);

const wallet = ethers.Wallet.createRandom()
console.log('Private Key: ', wallet.privateKey)
console.log('mnemonic   : ', wallet.mnemonic.phrase)
console.log("Address    : ", wallet.address);
console.log("Publickey  : ", wallet.publicKey)