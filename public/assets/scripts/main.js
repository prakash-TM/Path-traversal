/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};


/**
 * Algorithm
 * step 1: write function definition and get object and path string
 * step 2: split the path string and store into the new array as arr
 * step 3: assign object into new variable as res
 * step 4: use for loop and iterate the arr elements
 * step 5: check if res of arr element is defined or not
 * step 6: if not print undefined
 * step 7: if yes stored that object element into the res
 * step 8: finish the iteration print the res
 */


function findPath(obj, str) {
    const arr = str.split('.');
    var res = obj;
    for (let i in arr) {
        if (res[arr[i]] === undefined) {
            res = "unDefined"
        } else {
            res = res[arr[i]]
        }
    }
    // console.log(res[arr[i]])
    return res;
}

console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null