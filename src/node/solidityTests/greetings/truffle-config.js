const HDWalletProvider = require("@truffle/hdwallet-provider");


// get the MetaMask seed

secretsfile="/Users/mat/gitroot/secrets/metawallet.js"  // get the mnemonic variable from here above git roots
conf = require(secretsfile);
mnemonic = conf.mnemonic
infuraUrl = conf.infuraUrl
console.log(infuraUrl)

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, infuraUrl)
      },
      network_id: 3
    }
  },
  compilers: {
  solc: {
    version: "^0.8.6"
  }
}

};
