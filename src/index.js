const $ = require('jquery');

const sayHi = () => {
    console.log("Howdy!");
}

sayHi();

$("body").append("<h2>jQuery Successfully installed!</h2>");