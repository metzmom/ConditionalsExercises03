let engineIndicatorLight = "red blinking";
let fuelLevel =18000;
let engineTemperature = 2500;
let fuelEngineCheckOk = false;

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
   console.log("ENGINE FAILURE IMMINENT!");
   fuelEngineCheckOk = false;
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
   console.log("Check fuel level. Engines running hot.");
   fuelEngineCheckOk = false;
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
   console.log("Full tank. Engines good.");
   fuelEngineCheckOk = true;
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
   console.log("Fuel level above 50%. Engines good.");
   fuelEngineCheckOk = true;
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
   console.log("Fuel level above 25%. Engines good.");
   fuelEngineCheckOk = true;
} else {
   console.log("Fuel and engine status pending...");
   fuelEngineCheckOk = false;
}

/* 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.*/
let commandOverride = false;
// If commandOverride false, then we will check fuel and engine to see if OK to launch
// If commandOveride true, then just launch it
if (fuelEngineCheckOk !== true && commandOverride !== true){
  console.log("This rocket is doomed!")
}
let allconditionsPassed =true;

if(!allconditionsPassed){
  //
  endProcess
}



if(!(fuelEngineCheckOk === true) && !(commandOverride === true)){
  console.log("Rocket is doomed")
}

if (fuelEngineCheckOk === true || commandOverride === true){
  console.log("Clear To Launch");
} else {
  console.log( "Launch scrubbed ")
}

/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!"*/

 if ((fuelLevel > 20000 && engineIndicatorLight !=="red blinking") || (commandOverride === true)) {
   console.log("Clear To Launch");
} else {
   console.log("Launch Scrubbed");  
}  
 
