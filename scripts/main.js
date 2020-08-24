/*
setTimeout(() => {
    let curtain = document.querySelector('.curtain');
    curtain.classList.add('active');
    console.log('Hello');
}, 1000);

setTimeout(() => {
    let curtain = document.querySelector('.curtain');
    curtain.classList.remove('active');
    console.log('world');
}, 2000);
*/
setTimeout(() => {
    let hello = document.querySelector('.hello');
    hello.classList.add('active');
    console.log('hello');
}, 1000);

setTimeout(() => {
    hello = document.querySelector('.hello');
    hello.classList.add('hidden');
    let back = document.querySelector('.back');
    back.classList.add('active');
    console.log('hello');
}, 6000);