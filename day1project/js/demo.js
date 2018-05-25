console.log(10+20)

document.write(10+20)

//print first 5 numbers
for(let i=1; i<=5; i++){
    console.log(i)
}
//console.log("value of i after for loop"+i)
const c = 50;
console.log(c)
//c = 700

//Anonymous function
let f = function(){
    return "WF"
}
console.log(f)
console.log(f())

//Arrow Function
let m = () => "WellsFargo Bengaluru"
console.log(m)

//arrow fn with argument msg, return msg

let p = msg => msg
console.log(p(30))
console.log(p("bengaluru"))
console.log(p(true))
console.log(p(30+20))

//define a class point with 2 data member x and y
class Point {
    constructor(x, y){
        this.x = x
        this.y = y
    }

    display(){
        console.log("X:", this.x, "Y:", this.y)
    }
    
}

//Instance of Point Class
let pt1 = new Point(3,5)
pt1.display()

//inheritance
class Point3D extends Point{
    constructor(x, y, z){
        super(x,y)
        this.z = z
    }
    display(){
    super.display()
    console.log("Z:" ,this.z)
} 
}
let pd1 = new Point3D(1,2,3)
pd1.display()

function change(){
    let d = document.getElementById("h")
    let v = d.getAttribute("reply")
    d.innerHTML = v;
}
 


