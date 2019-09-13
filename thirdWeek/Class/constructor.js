function Vehicle(model, color,price) {
    this.model = model,
    this.color = color,
    this.price = price
    this.getName = function () {
        console.log("Bike is",this.model,",color is",this.color," & price is",this.price);
    }
}
let car2 = new Vehicle("Honda", "Red", "50k");
car2.getName();
