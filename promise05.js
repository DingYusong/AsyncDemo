function getNumber(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            var num = Math.ceil(Math.random()*10); //生成1-10的随机数
            if(num<=5){
                resolve(num);
            }
            else{
                reject('数字太大了');
            }
        }, 2000);
    });
    return p;
}

// getNumber()
//     .then(function(data){
//         console.log('resolved');
//         console.log(data);
//     })
//     .catch(function(reason){
//         console.log('rejected');
//         console.log(reason);
//     });



//我们知道Promise对象除了then方法，还有一个catch方法，它是做什么用的呢？其实它和then的第二个参数一样，用来指定reject的回调



getNumber()
    .then(function(data){
        console.log('resolved');
        console.log(data);
        console.log(somedata); //此处的somedata未定义
    })
    .catch(function(reason){
        console.log('rejected');
        console.log(reason);
    });



//不过它还有另外一个作用：在执行resolve的回调（也就是上面then中的第一个参数）时，如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到这个catch方法中。