const stc = require('node-static');

const fileServer = new stc.Server('./dist');

console.log("Starting server...");

require('http').createServer( (request, response) =>
	request.addListener('end', () => fileServer.serve(request, response)).resume()
).listen(process.env.PORT || 8080, () => console.log("Server started"));
