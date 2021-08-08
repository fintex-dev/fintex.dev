const HDWalletProvider = require("@truffle/hdwallet-provider");

secretsfile="/Users/mat/gitroot/secrets/metawallet.js"  // get the mnemonic variable from here
require(secretsfile)();

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/83f9baf669d145d4844a13c58897bfec",1)
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
