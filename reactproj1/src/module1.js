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
export default Point
//Instance of Point Class
let pt1 = new Point(3,5)
pt1.display()

//inheritance
export class Point3D extends Point{
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
