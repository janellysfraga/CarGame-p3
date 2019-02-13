//Variables
let car ={
    make: 'Lexus',
    model: 'ES',
    color: 'white',
    mileage: 0,
    IsWorking: true,

    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage = this.mileage + 8;
        alert(`New Mileage: ${this.mileage}`);

    }
}

//Functions
const rewriteStats(){

}

/*Captures keyboard input. Depending on the letter pressed it
will "call" (execute) dofferent functions */
document.onkeyup = (event) => {

    //Captures the key press, converts it to lowercase, and saves it to a variable
    let letter = String.fromCharCode(event.keyCode). tolowerCase();

    if (letter === "d"){
        car.driveToWork();
        rewriteStats();
    }
}