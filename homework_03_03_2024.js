// Task 1
/*

1. Given a number. Write a recursive function that reverse the number. Return the new
number.

Input          Output

2              2
13             31
815796         697518

*/

num = '';
rec(13) // 2 -> 2; 13 -> 31, 815796 -> 697518

let num;
function rec(n) {

    let current
    // debugger;

    if (/* n >= 0 && n < 10 */ n.toString().length === 1) {
        return (num += n) * 1;
    }
    current = n % 10;

    num += current;

    rec((n - current) / 10);

    return num * 1;
}

//-------------------------------------------------------------------------------


/*

2. Given a number and an array. Find the second occurrence of the number in the array.
Consider that the occurrence of each element in the array is at least two. (recursive)

Input                                       Output

5, [0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6]      6
8, [8, 8, 4, 0, 8, 0, 0, 0, 4]              1


*/

let checkNum = 5  // 8
const arr = [0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6]  // [8, 8, 4, 0, 8, 0, 0, 0, 4]  
const arr1 = [];

checker(array, number, i = 0, arr1);

function checker(array, number, i, arr1) {

    let result;
    if (array.length === 1) {
        return result = `there is no seccont occurrence of the number: ${number}`;
    } else if (i === array.length - 1) {
        return;
    }

    if (array[i] === number) {
        arr1.push(i);
    }

    checker(array, number, i + 1, arr1);

    result = arr1[1];
    return result;
}


//-------------------------------------------------------------------------------------------------


/*

3. Given a substring and a string. Find how many times the substring occurred in the string.
(For getting substring of the string use str.substring(startIndex, endIndex),
str.substr(startIndex, length) ) (recursive)

Input Output

‘ar’, ‘Are var far shared?’ 3
‘ook’, ‘Facebook looks odd’ 2

*/

// let string = 'Are var far shared?';   // 3
// let substr = 'ar';
let string = 'Facebook looks odd';  // 2
let substr = 'ook';
let result;

const str = {
    string,
    substr,
    substring: function (startIndex, endIndex) {
        let sub = this.string.slice(startIndex, endIndex);
        return sub
    }
}

charCount(string, substr, i = 0, result = 0)




function charCount(str, phrase, i) {
    // debugger;

    let subs = str.substring(i, i + phrase.length)
    if (i === str.length - phrase.length) {
        if (subs !== phrase) {
            return
        } else {
            return result += 1
        }
    }

    charCount(str, phrase, i + 1)

    if (subs === phrase) {
        result += 1
    }

    return result;

}


//--------------------------------------------------------------------

/*

4. Given a string, compute recursively (no loops) a new string where all appearances of "pi";
have been replaced by "3.14";.

Input                           Output
"Picsart pipelines"             "3.14csart 3.14pelines"
"picturespicturespictures"      "3.14ctures3.14ctures3.14ctures"


*/

let givenStr = "Picsart pipelines"; //            "3.14csart 3.14pelines"
// let givenStr ="picturespicturespictures"; //     "3.14ctures3.14ctures3.14ctures"
let newStr;

funnyPi(givenStr, i = 0, newStr = '');

function funnyPi(str, i) {
    debugger;
    // str = str.toLowerCase();
    // let newStr = '';
    if (i === str.length) {
        if (str[i] + str[i + 1] !== "pi" || str[i] + str[i + 1] !== "Pi") {
            return
        }
    }

    if (str[i] + str[i + 1] === "pi" || str[i] + str[i + 1] === "Pi") {
        newStr += 3.14;
        i += 2;
    } else {
        newStr += str[i];
        i += 1
    }

    funnyPi(str, i);

    return newStr;

}

//--------------------------------------------------------------------------

/*

5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
function that concats arrays).

Input                           Output
[1, [3, 4, [1, 2]], 10]         [1, 3, 4, 1, 2, 10]
[14, [1, [[[3, []]], 1], 0]     [14, 1, 3, 1, 0]

*/

const givenArr = [1, [3, 4, [1, 2]], 10]; //     [1, 3, 4, 1, 2, 10]
// const givenArr = [14, [1, [[[3, []]], 1], 0];  //    [14, 1, 3, 1, 0]



