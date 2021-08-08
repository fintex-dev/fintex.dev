const HDWalletProvider = require('truffle-hdwallet-provider'); 
const Web3 = require('web3');

const compiled_contract = require('./compile.js');
const interface = compiled_contract.output.contracts['Greetings.sol']['MatsFirstContract'].abi;
const bytecode = compiled_contract.output.contracts['Greetings.sol']['MatsFirstContract'].evm.bytecode.object;

// Secret
secretsfile="/Users/mat/gitroot/secrets/metawallet.js"  // get the mnemonic variable from here above git roots
conf = require(secretsfile);
mnemonic = conf.mnemonic


const provider = new HDWalletProvider(  
  mnemonic, 
  'https://ropsten.infura.io/v3/83f9baf669d145d4844a13c58897bfec'    
);

const web3 = new Web3(provider);

const deploy = async () => {
    accounts = await web3.eth.getAccounts(); 
  
    console.log('attempting to deploy from account',accounts[0]);

   // console.log(interface);
   // console.log(bytecode);

    //console.log(JSON.parse(interface));
    
    let contract = new web3.eth.Contract(interface);

    result = await contract.deploy({data: '0x' + bytecode, arguments: ['Hello World']}).send({gas: 2310334, from: accounts[0]});
    console.log('Contract deployed to', result.options.address); 

};


deploy();

