var http = require("http");
var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Salom Dunyo!');
    res.end();
});
server.listen(6060);