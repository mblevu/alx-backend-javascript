const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    switch (req.url) {
        case '/':
            res.write('Hello Holberton School!');
            break;
        case '/students':
            countStudents(process.argv[2])
                .then((data) => {
                    res.write('This is the list of our students\n');
                    res.write(`Number of students: ${data.counter}\n`);
                    for (const [key, value] of Object.entries(data.byField)) {
                        res.write(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`);
                    }
                })
                .catch((error) => {
                    res.write(error.message);
                });
            break;
        default:
            res.write('Hello Holberton School!');
    }
    res.end();
});

app.listen(1245);

module.exports = app;
