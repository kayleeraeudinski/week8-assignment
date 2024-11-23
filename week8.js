/*Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.*/

//Menu Cars

//class Car
    //make
    //model
class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}

//class Menu 
class Menu {
    constructor(){
        this.cars=[];
    }

    //cars array

    //add cars
    //prompt for a mke
    //prompt for a model
    //create new car and push car into array
    addCar(){
        let carMake = prompt("Enter car make:");
        let carModel = prompt("Enter the car model:");
        this.cars.push(new Car(carMake, carModel));
    }



    //delete cars
    deleteCar(){
        let carIndex = prompt("Enter car index to DELETE:");
        this.cars.splice(carIndex, 1);

    }

    //view cars
    viewCars(){
        let displayCars = '';
        for(let i = 0; i < this.cars.length; i++){

            displayCars += `
            ${i}) ${this.cars[i].make} ${this.cars[i].model}`
        }

        alert(`
            Car Inventory:
            ------------------
            ${displayCars}
            `);
    }

      //see a menu
      showMainMenu(){
        return prompt(` 
            Main Menu
            ----------------
            0) Exit Menu
            1) Add Car
            2) Delete Car
            3) View all cars
            `);
    }

    //start the menu
    start(){
        let selection = this.showMainMenu();

        while(selection != 0){

            switch(selection){

                case "1": this.addCar();
                break;

                case "2": this.deleteCar();
                break;

                case "3": this.viewCars();
                break;

                default: selection = 0;
            }
            selection = this.showMainMenu();
        }
        alert("Exiting Menu . . . Goodbye!");
    }

}

//instantiate hte menu and invoke the start method

let menu = new Menu();

menu.start();


