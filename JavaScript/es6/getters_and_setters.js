function makeClass() {
    "use strict";
    class Thermostat {
      // Constructs the class
      constructor(Fahrenheit) {
        this._Fahrenheit = Fahrenheit;
      }
      //gets and returns the new value based on constructor and set.
      //manipulates the value from set converstion(inputTemp) and returns it.
      get conversion() {
        return (5/9) * (this._Fahrenheit - 32);
      }
      //sets the value based on user input
      set converstion(inputTemp) {
        this._Fahrenheit = inputTemp;
      }
  
    }
  
  
    return Thermostat;
  }
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in C
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in C