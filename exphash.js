const keccak256 = require('keccak256');
//sha256 = f(message)
//keccak256 = f(i)

const name = 'Arbin';
const email = 'itzarbin@gmail.com';
const address = 'Bharatpur, Chitwan';

function hash(name, email, address) {
    const firstHash = '0x' + keccak256(name).toString('hex');
    const secondHashInput = firstHash + email;
    const secondHash = '0x' + keccak256(secondHashInput).toString('hex');
    const thirdHashInput = secondHash + address;
    const thirdHash = '0x' + keccak256(thirdHashInput).toString('hex');

    console.log('First Hash:', firstHash);
    console.log('Second Hash:', secondHash);
    console.log('Third Hash:', thirdHash);
}

console.log("Initial hashes:");
hash(name, email, address);

console.log("Changing name:");
hash(name + 'Chhatkuli', email, address);
