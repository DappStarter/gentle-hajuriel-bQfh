require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan reflect mad exchange include enroll force general'; 
let testAccounts = [
"0x1950780d82b485f729c14e96cba7b08129da8ef4c75e63b169ebeed15a9e8457",
"0xf6016b8ff24cdfe6d6d5716ffd497cce776227bcd4765b7f151f033fa1444b9d",
"0x59b9f0c71ad8b141e5311293c8adf24b2a639f754027c06313f93bf85aed11bf",
"0xc104cdbc22a6773772f5ca5c4fec50e46dc945d7f7f5563fa0d93ff2fab9d70a",
"0x1017c530325fdff05a603325038f87fea7c9882fced8901087f601ffae73b80b",
"0x1ffe5201ec834e5281f2de6f73b1e54d730f94d00933b7da8023d7144351a595",
"0x5e5fbfba5acc8f0e976fd6177398eb55bb4d9e933690db3709540c8e275fefa6",
"0x25304700900bc9580c9a5377c78ccfcf051d264b52c7f320c61d9c43eb9b5701",
"0x2fe89010f2ce3c645b6c9bf8a5d2c0e36d7a6c2df76525c823d0d0a20fa2b00d",
"0x96d6616a89c6b3c0fafd9574b22e86b077594b79212e1c620bc8cfabd1f99b81"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

