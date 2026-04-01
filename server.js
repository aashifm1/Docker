const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;

http.createServer((req, res) => {

    if (req.method === 'GET') {
        const filePath = path.join(__dirname, 'calculator.html');

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8');
            }
        });
    }

    else if (req.method === 'POST' && req.url === '/calculate') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                let { expression } = JSON.parse(body);

                // Replace safe symbols
                expression = expression.replace(/÷/g, '/')
                                       .replace(/×/g, '*')
                                       .replace(/−/g, '-');

                // Only allow numbers, operators, and decimals
                if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
                    throw new Error("Invalid characters");
                }

                // Evaluate expression safely
                const result = Function(`return ${expression}`)(); // safe for simple expressions

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ result }));

            } catch (err) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ result: 'Error' }));
            }
        });
    }

}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});