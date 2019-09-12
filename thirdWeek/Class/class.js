class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        console.log("x = "+this.x+" y = "+this.y);
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

let cp = new ColorPoint(25, 8, 'green');
cp.toString(); 

console.log(cp instanceof ColorPoint); 
console.log(cp instanceof Point);