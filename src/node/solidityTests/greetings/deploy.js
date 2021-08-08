const HDWalletProvider = require('truffle-hdwallet-provider'); 
const Web3 = require('web3');
//const { interface,bytecode} = require('./compile');
const { interface,bytecode} = require('Greetings');

const provider = new HDWalletProvider(  
  'frequent idle glide local trim picture chapter travel fashion regular ring erode', 
  'https://rinkeby.infura.io/v3/83f9baf669d145d4844a13c58897bfec'    
);

const web3 = new Web3(provider);

const deploy = async () => {
    accounts = await web3.eth.getAccounts(); 
  
    console.log('attempting to deploy from account',accounts[0]);
  
    const result = await new web3.eth.Contract(JSON.parse(interface)) 
      .deploy({data:'0x'+ bytecode, arguments:['Hello World']})      
      .send({from: accounts[0], gas:'5000000'});                              
  
    console.log('Contract deployed to', result.options.address); 
};

console.log(interface)
console.log(bytecode)

deploy();