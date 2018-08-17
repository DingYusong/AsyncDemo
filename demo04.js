// 'use strict'
//
// function* fib(max) {
//     var
//         t,
//         a = 0,
//         b = 1,
//         n = 0;
//     while (n < max) {
//         yield a;
//         [a, b] = [b, a + b];
//         n ++;
//     }
//     return;
// }
//
// // for (var x of fib(10)) {
// //     console.log(x); // 依次输出0, 1, 1, 2, 3, ...
// // }
//
// var g =  fib(10);
//
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
//
// var result = g.next();
//
// console.log(result.value);
//
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());




// var fs = require('fs');

var readFile = require('fs-readfile-promise');

// fs.readFile('./file1');


function* read() {
    try {
        var   r1 = yield readFile('./file1');
        var   r2 = yield readFile('./file1');
        var   r3 = yield readFile('./file1');
        console.log(r1);
    }
    catch (err) {
        // handle(err);
        console.log(err);
    }
}


read().next();
read().next();
read().next();
read().next();
read().next();

// , function (err, data) {
//     if (err) {
//         // throw err;
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
//     fs.readFile('./file2', function (err, data) {
//         if (err) {
//             // throw err;
//             console.log(err);
//         } else {
//             console.log(data.toString());
//         }
//         fs.readFile('./file3', function (err, data) {
//             if (err) {
//                 // throw err;
//                 console.log(err);
//             } else {
//                 console.log(data.toString());
//             }
//             fs.readFile('./file4', function (err, data) {
//                 if (err) {
//                     // throw err;
//                     console.log(err);
//                 } else {
//                     console.log(data.toString());
//                 }
//             });
//         });
//     });
// }
