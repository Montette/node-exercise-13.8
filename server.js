var http = require('http');
var fs = require('fs');

var htmlFile;
var errorImg;


fs.readFile('./index.html', function (err, data) {
    if (err) throw err;
    htmlFile = data;
});

fs.readFile('./error.jpg', function (err, data) {
    if (err) throw err;
    errorImg = data;
});


var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/cats') {
        response.write(htmlFile);
        response.end();
    } else {
        response.setHeader("Content-Type", "image/jpeg");
        response.statusCode = 404;
        response.write(errorImg);
        response.end();       
    }
});
server.listen(8080);


