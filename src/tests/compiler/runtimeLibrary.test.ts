import { runtimeLibrary } from "../../compiler/runtimeLibrary";

test("generates print instructions", () => {
  const printInstruction = runtimeLibrary.print.replace("{value}", "Hello, World!");
  expect(printInstruction).toBe("print Hello, World!\nprintflush message1");
});

test("generates memory instructions", () => {
  const readInstruction = runtimeLibrary.readMemory
    .replace("{destination}", "x")
    .replace("{position}", "0");
  expect(readInstruction).toBe("read x memory 0");

  const writeInstruction = runtimeLibrary.writeMemory
    .replace("{value}", "42")
    .replace("{position}", "1");
  expect(writeInstruction).toBe("write 42 memory 1");
});

test("generates arithmetic operations", () => {
  const addInstruction = runtimeLibrary.add
    .replace("{result}", "c")
    .replace("{a}", "a")
    .replace("{b}", "b");
  expect(addInstruction).toBe("op add c a b");

  const subInstruction = runtimeLibrary.sub
    .replace("{result}", "c")
    .replace("{a}", "a")
    .replace("{b}", "b");
  expect(subInstruction).toBe("op sub c a b");

  const mulInstruction = runtimeLibrary.mul
    .replace("{result}", "c")
    .replace("{a}", "a")
    .replace("{b}", "b");
  expect(mulInstruction).toBe("op mul c a b");

  const divInstruction = runtimeLibrary.div
    .replace("{result}", "c")
    .replace("{a}", "a")
    .replace("{b}", "b");
  expect(divInstruction).toBe("op div c a b");

  const modInstruction = runtimeLibrary.mod
    .replace("{result}", "c")
    .replace("{a}", "a")
    .replace("{b}", "b");
  expect(modInstruction).toBe("op mod c a b");

  const powInstruction = runtimeLibrary.pow
    .replace("{result}", "c")
    .replace("{a}", "a")
    .replace("{b}", "b");
  expect(powInstruction).toBe("op pow c a b");

  const sqrtInstruction = runtimeLibrary.sqrt
    .replace("{result}", "c")
    .replace("{a}", "a");
  expect(sqrtInstruction).toBe("op sqrt c a");

  const absInstruction = runtimeLibrary.abs
    .replace("{result}", "c")
    .replace("{a}", "a");
  expect(absInstruction).toBe("op abs c a");
});

test("generates jump commands", () => {
  const jumpInstruction = runtimeLibrary.jump.replace("{label}", "loop");
  expect(jumpInstruction).toBe("jump loop");

  const conditionalJumpInstruction = runtimeLibrary.conditionalJump
    .replace("{label}", "end")
    .replace("{condition}", "equal")
    .replace("{value}", "1");
  expect(conditionalJumpInstruction).toBe("jump end equal 1");
});

test("generates unit control commands", () => {
  const moveInstruction = runtimeLibrary.moveUnit
    .replace("{x}", "10")
    .replace("{y}", "20");
  expect(moveInstruction).toBe("ucontrol move 10 20");

  const mineInstruction = runtimeLibrary.mine
    .replace("{x}", "5")
    .replace("{y}", "15");
  expect(mineInstruction).toBe("ucontrol mine 5 15");

  const stopInstruction = runtimeLibrary.stopUnit;
  expect(stopInstruction).toBe("ucontrol stop");

  const unitRadarInstruction = runtimeLibrary.unitRadar
    .replace("{filter}", "enemy")
    .replace("{sort}", "distance")
    .replace("{target}", "nearest")
    .replace("{x}", "10")
    .replace("{y}", "20")
    .replace("{radius}", "30");
  expect(unitRadarInstruction).toBe("uradar enemy distance nearest 10 20 30");

  const bindUnitInstruction = runtimeLibrary.bindUnit.replace("{unitType}", "flare");
  expect(bindUnitInstruction).toBe("ubind flare");
});

test("generates block interaction commands", () => {
  const sensorInstruction = runtimeLibrary.sensor
    .replace("{result}", "temperature")
    .replace("{block}", "reactor")
    .replace("{property}", "heat");
  expect(sensorInstruction).toBe("sensor temperature reactor heat");

  const controlInstruction = runtimeLibrary.controlBlock
    .replace("{action}", "enable")
    .replace("{block}", "reactor")
    .replace("{value}", "true");
  expect(controlInstruction).toBe("control enable reactor true");

  const radarInstruction = runtimeLibrary.radar
    .replace("{filter}", "enemy")
    .replace("{sort}", "distance")
    .replace("{target}", "nearest")
    .replace("{x}", "10")
    .replace("{y}", "20")
    .replace("{radius}", "30");
  expect(radarInstruction).toBe("radar enemy distance nearest 10 20 30");
});

test("generates graphics commands", () => {
  const drawInstruction = runtimeLibrary.draw
    .replace("{type}", "line")
    .replace("{x}", "0")
    .replace("{y}", "0")
    .replace("{width}", "10")
    .replace("{height}", "20")
    .replace("{color}", "red");
  expect(drawInstruction).toBe("draw line 0 0 10 20 red");

  const drawFlushInstruction = runtimeLibrary.drawFlush;
  expect(drawFlushInstruction).toBe("drawflush display1");
});

test("generates flow control commands", () => {
  const waitInstruction = runtimeLibrary.wait.replace("{duration}", "5");
  expect(waitInstruction).toBe("wait 5");

  const stopInstruction = runtimeLibrary.stop;
  expect(stopInstruction).toBe("stop");

  const endInstruction = runtimeLibrary.end;
  expect(endInstruction).toBe("end");
});

test("generates advanced operations", () => {
  const lookupInstruction = runtimeLibrary.lookup
    .replace("{result}", "data")
    .replace("{table}", "memory")
    .replace("{index}", "3");
  expect(lookupInstruction).toBe("lookup data memory 3");

  const packColorInstruction = runtimeLibrary.packColor
    .replace("{result}", "color")
    .replace("{r}", "255")
    .replace("{g}", "128")
    .replace("{b}", "64")
    .replace("{a}", "255");
  expect(packColorInstruction).toBe("packcolor color 255 128 64 255");
});
