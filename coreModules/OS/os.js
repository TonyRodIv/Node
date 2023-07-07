const os = require('os');

//atv 01
// console.log(os.platform())
// console.log(os.arch())

// ------------------------------------------------------------------

//atv 02
// console.log(os.cpus())

// ------------------------------------------------------------------

//atv 03
// const totalBits = os.totalmem()
// console.log(totalBits)
// const gb = (totalBits / 8) / 1000000000;
// console.log(`gb: ${gb.toFixed(2)}`);

// ------------------------------------------------------------------

//atv 04
// console.log(os.userInfo().username)
// console.log(os.userInfo().homedir)

// ------------------------------------------------------------------

//atv 05
// console.log(os.userInfo().username)
// console.log(os.version())
// console.log(os.platform())

// ------------------------------------------------------------------

//atv 06
console.log(os.networkInterfaces()['Ethernet 2'][0].family);
console.log(os.uptime())