function createCar(manufacturer: string, modelName: string, ...extras: any[]): object {
    let carInfo: object = {
        manufacturer: manufacturer,
        modelName: modelName,
        extras: extras
    };
    return carInfo;
}

// Call the function with required information and additional key-value pairs
let car1 = createCar("Toyota", "Corolla", "Red", "Sunroof", "Bluetooth");

console.log("Car Information")
console.log("Car");
