// Functinon Basics
const greet = (name) => {
    console.log(`hello, ${name}`);
}
greet('adham');
greet('hi')

setTimeout(() => {
    console.log('in timeout');
    clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
    console.log('in the interval');
}, 1000);