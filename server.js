const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url)

    const filename = req.url === '/' ? 'index.html' : req.url;
    const filePath = path
        .join(
            __dirname, 
            'static', 
            filename.substring(0, filename.indexOf('?') === -1 ? filename.length : filename.indexOf('?'))
        )

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404);
            res.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});