function a(x){
    console.log("function A", x)

    function b(msg){
        console.log("function B", msg)
    }

    return b
}

//let x = a()
   // console.log(x)
    //x()
a()()
a(300)("alchemy")

/*a = () {
    console.log("function A")
}*/

myarray = [10,20]
console.log(myarray)
arr2 = [300,500, ...myarray, 800]
console.log("arr2", arr2)

arr3 = [...arr2.slice(0,1), ...arr2.slice(2)]
console.log("arr3", arr3)

arr3 = [...arr2.slice(0,1), 55 ,...arr2.slice(2)]
console.log("arr3", arr3)




