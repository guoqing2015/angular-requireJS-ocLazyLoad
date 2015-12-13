var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    mime = require("mime"),
    port = 8888;

http.createServer(function (request, response) {

    /**
     * set the base app dir
     * @type {string}
     */
    var uri = 'app/' + url.parse(request.url).pathname,
        filename = path.join(process.cwd(), uri);

    /**
     * serve the requested file
     */
    fs.exists(filename, function (exists) {

        // check if the file exsist, send 404 as text if false
        if (!exists) {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("404 Not Found\n");
            response.end();
            return;
        }

        // lunch index.html
        if (fs.statSync(filename).isDirectory()) filename += '/index.html';

        fs.readFile(filename, "binary", function (err, file) {
            if (err) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(err + "\n");
                response.end();
                return;
            }

            response.writeHead(200, {"Content-Type": mime.lookup(filename)});
            response.write(file, "binary");
            response.end();
        });
    });

}).listen(parseInt(port, 10));

console.log("server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");