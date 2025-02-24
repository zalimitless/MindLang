import { Compiler } from "./compiler/compiler";

async function main() {
    const compiler = new Compiler();

    const input = `
      // Identified Issues with Lexer and Parser:
      // \`!unit.bind()\` is throwing an error: The ! before the statement is not recognized.
      // \`return;\` is throwing an error, as it is expecting an identifier to be returned.
      // wait(0.8); is throwing an error, as it is expecting an identifier for some reason.


      // A globally defined function, which multiple processors can use in this file.
      function waitForFreeUnit(messages, unitName) {
        // Attempt to bind to the first unit type
        let unit = Unit(unitName);
        if (!unit.bind()) {
            print("No unit of type " + unitName + " found.");
            printflush(MESSAGES);
            return;
        }
        
        // Check if the unit is free
        if (!unit.isControlled()) {
            print("Looking for a free " + unitName + "...");
            printflush(MESSAGES);
            return;
        }
        
        // Flag the poly unit
        unit.flag(1);
      }

      // Define the Main processor
      // This will tell the program into which file it needs to go into.
      processor Main {
        
        // Define the message block
        let MESSAGES = message1;

        // Initialize variables for movement
        let ANGLE = 0;
        
        function controlUnit(unit) {
            // Control the unit
            let moveX = this.x + (10 * sin(ANGLE));
            let moveY = this.y + (10 * cos(ANGLE));

            // The unit move will also bind the unit when it is moved.
            unit.move(moveX, moveY, 0, 0, 0);
            print("Currently bound unit is " + unit + ".");
            printflush(MESSAGES);
            wait(0.8);
            ANGLE += 45;
        }
        
        let poly = waitForFreeUnit(MESSAGES, "poly");
        let mega = waitForFreeUnit(MESSAGES, "mega");
        
        // Loop for controlling the units
        while (true) {
            controlUnit(poly);
            controlUnit(mega);
        }
      }

      processor HealthMonitor {

        // This is an internal function, which only the HealthMonitor can use.
        function checkHealth(unit) {
            if(unit.health < unit.maxHealth * 0.8) {
              unit.move(this.x, this.y - 10, 0, 0, 0);
            }
        }
        
        let poly = waitForFreeUnit(MESSAGES, "poly");
        let mega = waitForFreeUnit(MESSAGES, "mega");
        
        // Loop for controlling the units
        while (true) {
            checkHealth(poly);
            checkHealth(mega);
        }
      }
    `;

    const output = compiler.compileToTarget(input);
    console.log(output);

}

main();