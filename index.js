function hello() {
	console.log("Hello, World!")
}

function greet(name) {
	console.log("Hello, " + name)
}

let lol = { hello: hello, greet: greet }
module.exports = lol;
