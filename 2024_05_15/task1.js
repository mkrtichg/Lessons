function createPromise(err, value, ms){
    return new Promise(function(res, rej){
        setTimeout(function (params) {
            if(err){
                return rej(err)
            } else {
                return res(value)
            }
            
        }, ms)
    })
}

const arr = [
    createPromise(0, 111, 2000),
    createPromise(0, 222, 5000),
    createPromise(0, 333, 1000),
    createPromise(0, 444, 4000),



]

Promise.race(arr)
