/**
 * Car Constructor
 * @param {any} options 
 */
function Car(options) {
  this.doors = options.doors || 4;
  this.state = options.state || 'barnd new';
  this.color = options.color || 'silver';
}

/**
 * Truck Constructor
 * @param {any} options 
 */
function Truck(options) {
  this.state = options.state || 'used';
  this.wheelSize = options.wheelSize || 'large';
  this.color = options.color || 'blue';
}

function VehicleFactory() {}

// default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function(options) {
  switch (options.vehicleType) {
    case 'car':
      this.vehicleClass = Car;
      break;
    case 'truck':
      this.vehicleClass = Truck;
      break;
  }

  return new this.vehicleClass(options);
}


var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
  vehicleType: 'car'
})

console.log(car);
console.log(car instanceof Car)
console.log(car instanceof Truck)