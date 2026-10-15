const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Version 2 - Automatic CI/CD Deployment Successful!");
    } else if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "UP" }));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Application running on port 3000");
});