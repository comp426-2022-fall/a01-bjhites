// Require http module
const http = require('http');

// Require fs module
const fs = require('fs');
// Require minimist module (make sure you install this one via npm).
// Use minimist to process one argument `--port=` on the command line after `node server.js`.
const args = require('minimist')(process.argv.slice(2), {'--': true});
// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.
const port = args.port || 3000;

// Use the fs module to create an arrow function using `fs.readFile`.
fs.readFile('./public/index.html', 'utf8', (err, data) => {
	if (err) {
		console.log(err);
		return err;
	}
	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(data);
})

	server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

// The function must read a file located at `./public/index.html` and do some stuff with it.

// Start the `server` const listening on the port defined by argument in your `port` const. 
// Put the exact message `Server listening on port ${port}` on the console log. 
});



// That's it! You're all done!
