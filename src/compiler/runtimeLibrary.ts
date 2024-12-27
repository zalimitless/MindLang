export const runtimeLibrary: Record<string, string> = {
    // Print a value to the console
    print: "print {value}\nprintflush message1",

    // Memory management
    readMemory: "read {destination} memory {position}",
    writeMemory: "write {value} memory {position}",

    // Arithmetic operations
    add: "op add {result} {a} {b}",
    sub: "op sub {result} {a} {b}",
    mul: "op mul {result} {a} {b}",
    div: "op div {result} {a} {b}",
    mod: "op mod {result} {a} {b}",
    pow: "op pow {result} {a} {b}",
    sqrt: "op sqrt {result} {a}",
    abs: "op abs {result} {a}",

    // Jump commands
    jump: "jump {label}",
    conditionalJump: "jump {label} {condition} {value}",

    // Unit control
    moveUnit: "ucontrol move {x} {y}",
    mine: "ucontrol mine {x} {y}",
    stopUnit: "ucontrol stop",
    unitRadar: "uradar {filter} {sort} {target} {x} {y} {radius}",
    bindUnit: "ubind {unitType}",

    // Block interaction
    sensor: "sensor {result} {block} {property}",
    controlBlock: "control {action} {block} {value}",
    radar: "radar {filter} {sort} {target} {x} {y} {radius}",

    // Display and graphics
    draw: "draw {type} {x} {y} {width} {height} {color}",
    drawFlush: "drawflush display1",

    // Logic flow
    wait: "wait {duration}",
    stop: "stop",
    end: "end",

    // Advanced operations
    lookup: "lookup {result} {table} {index}",
    packColor: "packcolor {result} {r} {g} {b} {a}",
};
