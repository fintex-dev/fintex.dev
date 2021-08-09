const HDWalletProvider = require('truffle-hdwallet-provider'); 
const Web3 = require('web3');

const compiled_contract = require('./compile.js');
const interface = compiled_contract.output.contracts['Greetings.sol']['MatsFirstContract'].abi;
const bytecode = compiled_contract.output.contracts['Greetings.sol']['MatsFirstContract'].evm.bytecode.object;

const deploy = async () => {

  // Get Secrets from Vault
  const vault = require("node-vault")({
      apiVersion: "v1",
      endpoint: "https://10.0.0.1:8200",
  });
  vault.token = process.env.VAULT_TOKEN;
  data  = await vault.read("secret/metamask_mnemonic"); 
  const mnemonic = data.data.value;
  data = await vault.read("secret/infuraUrl"); 
  const infuraUrl = data.data.value;


  // Build provider
  const provider = new HDWalletProvider(  
      mnemonic, 
      infuraUrl   
  );
  const web3 = new Web3(provider);

  // get account
  accounts = await web3.eth.getAccounts(); 
  console.log('attempting to deploy from account',accounts[0]);

// save contract
 let contract = new web3.eth.Contract(interface);
 result = await contract.deploy({data: '0x' + bytecode, arguments: ['Hello World']}).send({gas: 2310334, from: accounts[0]});
 console.log('Contract deployed to', result.options.address); 

};

deploy();

