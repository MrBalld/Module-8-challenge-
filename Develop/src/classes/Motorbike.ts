// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODONE: Declare properties of the Motorbike class
  // TODONE: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODONE: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
    // Declare properties of the Car class
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];
  
    // Constructor for the Car class
     // TODONE: Create a constructor that accepts the properties of the Motorbike class
    // TODONE: The constructor should call the constructor of the parent class, Vehicle
    // TODONE: The constructor should initialize the properties of the Motorbike class
    // TODONE: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not

    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[]
    ) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize properties of the Car class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

 
  // TODONE: Implement the wheelie method
    // TODONE: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    wheelie(): void{
      console.log(`Motorbike [${this.make}] [${this.model}] is doing a wheelie!`);
    }
  // TODONE: Override the printDetails method from the Vehicle class
  // TODONE: The method should call the printDetails method of the parent class
  // TODONE: The method should log the details of the Motorbike
  // TODONE: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    override printDetails(): void {
      super.printDetails();

      console.log(this.vin);
      console.log(this.color);
      console.log(this.make);
      console.log(this.model);
      console.log(this.year);
      console.log(this.weight);
      console.log(this.topSpeed);
      console.log(this.wheels);
    }

}
// Export the Motorbike class as the default export
export default Motorbike;
