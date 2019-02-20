//VARIABLES
let car = {
    make: 'Lexus',
    model: 'ES',
    color: 'white',
    mileage: 0,
    IsWorking: true,

    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 10;
        alert(`New Mileage: ${this.mileage}`);

    },
    driveAroundUSA(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 6000;
        alert(`New Mileage: ${this.mileage}`);
        alert('Car needs a tuneup!');
        this.isWorking = false;
},

getTuneUp() {
    alert(`Car is fixed and ready to go!`);
    this.isWorking = true;
},

honk() {
    alert(`Honk! Honk!`);
}
};

//FUNCTIONS
//logs all of our car's current stats to the console
const reWriteStats = () => {
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Color: ${car.color}`);
    console.log(`Mileage: ${car.mileage}`);
    console.log(`Is Working: ${car.isWorking}`);
    console.log(`------------------------`);
}
}

//MAIN PROCESS
//Captures keyboard input. Depending on the letter pressed it
//will "call" (execute) dofferent functions 
document.onkeyup = (event) => {

    //Captures the key press, converts it to lowercase, and saves it to a variable
    let letter = String.fromCharCode(event.keyCode). tolowerCase();
    if(letter === 'h'){
        car.honk();
        reWriteStats();
    }
    if(letter === 'r'){
        car.driveAroundUSA();
        reWriteStats();
    }
    if(letter === 't'){
        car.getTuneUp();
        reWriteStats();
    }
    if(letter === 'd'){
        car.driveToWork();
        reWriteStats();
    }


