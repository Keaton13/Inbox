// deploy code will go here
const HDWalletProvider = require('truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'call glow acoustic vintage front ring trade assist shuffle mimic volume reject',
    'https://rinkeby.infura.io/v3/fd97f79d623645da92ce2305472cfcad'
);
const web3 = new Web3(provider);
