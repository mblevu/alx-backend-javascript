
class StudentsController {
  constructor() {
    this.students = [];
  }

getAllStudents(req, res) {
    const database = readDatabase();

    if (!database) {
        res.status(500).send('Cannot load the database');
        return;
    }

    const studentsByField = {};
    database.forEach(student => {
        const field = student.field.toLowerCase();
        if (!studentsByField[field]) {
            studentsByField[field] = [];
        }
        studentsByField[field].push(student.firstName);
    });

    const responseText = Object.entries(studentsByField)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([field, students]) => `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`)
        .join('\n');

    res.status(200).send(`This is the list of our students:\n${responseText}`);
}

getAllStudentsByMajor(req, res) {
    const major = req.query.major;

    if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
    }

    const database = readDatabase();

    if (!database) {
        res.status(500).send('Cannot load the database');
        return;
    }

    const studentsByField = {};
    database.forEach(student => {
        const field = student.field.toLowerCase();
        if (field === major.toLowerCase()) {
            if (!studentsByField[field]) {
                studentsByField[field] = [];
            }
            studentsByField[field].push(student.firstName);
        }
    });

    const responseText = Object.entries(studentsByField)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([field, students]) => `List: ${students.join(', ')}`)
        .join('\n');

    res.status(200).send(responseText);
}
}

module.exports = StudentsController;