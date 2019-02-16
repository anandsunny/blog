const http = require('http');
const port = process.env.PORT || 3100;
const app = require('./app');

const server = http.createServer(app);

server.listen(port, () => {console.log(`server ran on port: ${port}`)});
