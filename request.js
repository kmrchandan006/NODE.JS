 const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, world!\n');
    }
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
