function nextinline(arr, item) {

arr.push(item)
return arr.shift()
}

var testarr = [1,2,3,4,5]

console.log("Before: " + JSON.stringify(testarr))
console.log(nextinline(testarr, 6,7))
console.log("After: " + JSON.stringify(testarr))