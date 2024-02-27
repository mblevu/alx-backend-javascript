
export default function readDatabase (path) {
  return new Promise((resolve, reject) => {
    const fs = require('fs');

    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n');
      const students = lines.filter((line) => line).map((line) => line.split(','));

      console.log(`Number of students: ${students.length}`);

      const fields = {};
      for (const student of students) {
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      }

      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
      resolve();
    });
  });
}
