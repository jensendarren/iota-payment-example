const express = require('express')
const app = express()
const http = require('http').Server(app)
const Iota = require('@iota/core');
const Converter = require('@iota/converter');
const seed = 'REPLACE_WITH_YOUR_SEED'
const iota = Iota.composeAPI({
  provider: 'https://nodes.comnet.thetangle.org:443'
});

const options = {
  checksum: true,
  security: 2
}

app.get('/', (req, res) => {
  res.sendFile(__dirname, '/index.html')
})

app.use(express.static(__dirname, { index: 'index.html' }));
app.use(express.static('img'))

http.listen(80, () => {
  console.log('Listening on port 80')
})

const io = require('socket.io')(http)

io.on('connection', (socket) => {
  console.log('connection....')
  iota.getNewAddress(seed, options, (error, newAddress) => {
    if(error) {
      console.log(error)
    } else {
      console.log("New IOTA Address: " + newAddress)
      // Create a transfers object of zero value using the new address
      const transfers = [
        {
            value: 0,
            address: newAddress
        }
      ]
      // Send the transaction to the network
      iota.prepareTransfers(seed, transfers)
        .then(trytes => {
          return iota.sendTrytes(trytes, 3, 10);
        })
        .then(bundle => {
          console.log(bundle)
          socket.emit('newAddress', newAddress)
          CheckBalance(newAddress, socket)
        })
        .catch(err => {
          console.error(err)
      });
    }
  });
})

CheckBalance = (addressToCheck, socket) => {
  iota.getBalances([addressToCheck], 100)
    .then(({ balances }) => {
      console.log(balances)
      if(balances[0]>0)
      {
          socket.emit('unlocked', addressToCheck)
          console.log('Unlocked:'+ addressToCheck)
      }
      CheckBalance(addressToCheck, socket)
    })
    .catch(err => {
      console.log(err)
  })
}