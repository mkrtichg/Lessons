
// reduce  solved by D.M.
const arr = [1, 2, 3, 4, 5];

myReduce(function (sum, el, index, a) {
    return sum + el;
}, 0, arr)  // 15 for arr = [1, 2, 3, 4, 5]


function myReduce(callback, iV, array) {
    let result = iV;
    let startIndex = 0;
    if (iV === undefined) {
        result = array[0];
        startIndex = 1;
    }
    for (let i = 0; i < array.length; i++) {
        result = callback(result, array[i], array)
    }
    return result;
}

// forEach 

myForEach(function (el, index, array) {
    alert(`element is ${el}
    index = ${index}
    array = ${array} `)

}, arr)


function myForEach(callback, array) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array)
    }
}

//find and findIndex/findLastIndex


//find
myFind(function (value, el, index, array) {
    if ((el === value)) {
        return true
    }

}, arr, 4)



function myFind(callback, array, value) {
    for (let i = 0; i < array.length; i++) {
        if (callback(value, array[i], i, array)) {
            return array[i]
        }
    }
}

//findIndex

myFindIndex(function (value, el, index, array) {
    if ((el === value)) {
        return true
    }
}, arr, 4)



function myFindIndex(callback, array, value) {
    for (let i = 0; i < array.length; i++) {
        if (callback(value, array[i], i, array)) {
            return i
        }
    }
    return -1
}


// findLastIndex

arr.push(4, 3, 2, 1);  // since this step the array modified, now it's  [1, 2, 3, 4, 5, 4, 3, 2, 1]

myFindLastIndex(function (value, el, index, array) {
    if ((el === value)) {
        return true
    }
}, arr, 4)



function myFindLastIndex(callback, array, value) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (callback(value, array[i], i, array)) {
            return i
        }
    }
    return -1
}


//   ////   filter


myFilter(function (value, el, index, array) {
    if ((el > value)) {
        return true
    }
}, arr, 4)



function myFilter(callback, array, value) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(value, array[i], i, array)) {
            result.push(array[i])
        }
    }
    return result
}


// map

myMap(function (el, index, array) {
    return el * 2
}, arr)



function myMap(callback, array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let callbackResult = callback(array[i], i, array)
        result.push(callbackResult)

    }
    return result
}

// arr.some(fn)/arr.every(fn) 


        //arr.some(fn)

mySome(function (el, index, array) {
    console.log('hi') // in the case of el === 1 hi logged 9 times if the last 1 is removed -> flase ???
    if(el === 2){
        return index
    }
}, arr)  



function mySome(callback, array) {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)){
            return true
        }
    }
    return false
}

//arr.every(fn)

myEvery(function (el, index, array) {    
    if(el < 6){
        return 'hi'
    }
}, arr)  



function myEvery(callback, array) {
    for (let i = 0; i < array.length; i++) {
        if(!callback(array[i], i, array)){
            return false
        }
    }
    return true
}