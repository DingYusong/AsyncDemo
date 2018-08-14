var fs = require('fs');
fs.readFile('./file1', function (err, data) {
    if (err) {
        // throw err;
        console.log(err);
    } else {
        console.log(data.toString());
    }
    fs.readFile('./file2', function (err, data) {
        if (err) {
            // throw err;
            console.log(err);
        } else {
            console.log(data.toString());
        }
        fs.readFile('./file3', function (err, data) {
            if (err) {
                // throw err;
                console.log(err);
            } else {
                console.log(data.toString());
            }
            fs.readFile('./file4', function (err, data) {
                if (err) {
                    // throw err;
                    console.log(err);
                } else {
                    console.log(data.toString());
                }
            });
        });
    });
});




