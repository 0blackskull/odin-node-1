const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    let path = './';
    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact':
            path += 'contact-me.html';
            break;
        default:
            path += '404.html'
    }

    fs.readFile(`${path}`, (err, data) => {
        if (err) {
            console.log('Error occurred');
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(8080, 'localhost', () => {
    console.log('Server is now listening for requests!');
});