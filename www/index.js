async function init() {

  const importObject = {
    console: {
      log: () => {
        console.log("Just logging something");
      }
    }
  }

  const response = await fetch("sum.wasm");
  const buffer = await response.arrayBuffer();
  const wasm = await WebAssembly.instantiate(buffer);
  const sumFunction = wasm.instance.exports.sum;
  const result = sumFunction(80, 80);
  console.log(result);
}

init();
