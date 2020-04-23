// This file is for testing the call to getBalances
const Iota = require('@iota/core');
const iota = Iota.composeAPI({
  provider: 'https://nodes.comnet.thetangle.org:443'
});

// Create the .seed file and add your own private seed
const fs = require('fs');
const seed = fs.readFileSync(".seed").toString().trim();

// Replace with your own adderess
const address = '9LZF9NEFICEHVMSKRHIBOFSQZAJYKCFTYSPVFFZOQJMJARZBH9PQXSECHSEMTGGXPEAKKCITXFNYJQRTCPAJWDWWKW'

var balances;
checkBalances = async () => {
  resp = await iota.getBalances([address], 100)
  console.log(resp)
}
checkBalances()

/**
 *
 * This call should return something like this
 *
 *
 * {
    balances: [ 1 ],
    references: [
      'DHSVPBGH9XQETBYKRCRMOJAJIUICAZDBYCKJJWSZSNKQJDUKDPZOEEVQ9OJXUY9KYVTRHDWJSTAXCC999'
    ],
    milestoneIndex: 42878,
    duration: 0
  }
 */