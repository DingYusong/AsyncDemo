'use strict'

setTimeout(function a() {
    while (1);
    console.log(Date()+'a');
},2000);



setTimeout(function b() {
    console.log(Date()+'b');
},2000);



setTimeout(function c() {
    console.log(Date()+'c');
},2000);



setTimeout(function d() {
    console.log(Date()+'d');
},2000);



setTimeout(function e() {
    console.log(Date()+'e');
},2000);


async function f() {

    let job1 = await new Promise(function (resolve, reject) {
        setTimeout(function e() {
            resolve(111);
            console.log(Date()+'await1');
        },2000);
    });


    let job2 = await new Promise(function (resolve, reject) {

        setTimeout(function e() {
            resolve(112);
            console.log(Date()+'await2');
        },2000);

    });

    let job3 = await new Promise(function (resolve, reject) {

        setTimeout(function e() {
            resolve(113);
            console.log(Date()+'await3');
        },2000);

    });

    console.log(Date()+'f');
}

f();

setTimeout(function h() {
        console.log(Date()+'h');
        },2000);


console.log('g');
console.log('h');

//单线程指的是主程序是单线程的
//nodejs单线程异步。异步io操作也是一个单独的线程，但是这个io操作不占用主线程。
//单线程如果阻塞，比如a一直执行while (1)则阻塞主线程，只能打印出gh剩下的打印不出来了。
