// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODONE: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    // Declare properties of the Truck class
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];
    towingCapacity: number;
    
  // TODONE: Declare properties of the Truck class
  // TODONE: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODONE: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)


    // TODONE: Create a constructor that accepts the properties of the Truck class
    // TODONE: The constructor should call the constructor of the parent class, Vehicle
    // TODONE: The constructor should initialize the properties of the Truck class
    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,  //required variables for constructor
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[],
      towingCapacity: number
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
      this.towingCapacity = towingCapacity;
 // TODONE: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
      if (wheels.length !== 4) {
        this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
      } else {
        this.wheels = wheels;
      }
  }

  // TODONE: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODONE: Get the make an model of the vehicle if it exists
    let carDetails = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
    // TODONE: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODONE: If it is, log that the vehicle is being towed
    // TODONE: If it is not, log that the vehicle is too heavy to be towed
    if (vehicle.weight < this.towingCapacity) {
      console.log(`${carDetails} is being towed`);
    } else {
      console.log(`Vehicle is too heavy to be towed`);
    }
  }
  
  // TODONE: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();

    console.log(this.vin);
    console.log(this.color);
    console.log(this.make);
    console.log(this.model);
    console.log(this.year);
    console.log(this.weight);
    console.log(this.topSpeed);
    console.log(this.towingCapacity);
    console.log(this.wheels);
  }
    // TODONE: The method should call the printDetails method of the parent class
    // TODONE: The method should log the details of the Truck
    // TODONE: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
}

// Export the Truck class as the default export
export default Truck;
