//换成promise 形式就清楚的多了

var readFile = require('fs-readfile-promise');

readFile('./file1')
    .then(function (data) {
        console.log(data.toString());
        return readFile('./file2');
    })
    .then(function (data) {
        console.log(data.toString());
        return readFile('./file3');
    })
    .then(function (data) {
        console.log(data.toString());
        return readFile('./file4');
    })
    .then(function (data) {
        console.log(data.toString());
        return readFile('./file5');
    })
    .catch(function (reason) {
        console.log('rejected');
        console.log(reason);
    });


