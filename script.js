// Step 1: Fundamentals of Object-Oriented Programming
// Objects in JavaScript are collections of properties and methods.
// A property is a value that belongs to an object, and a method is a function that belongs to an object.

document.addEventListener('DOMContentLoaded', function() {
    // Step 2: Create an Object Literal
    const students = []; // Array to hold student objects

    // Attach event listener to the form after the DOM is loaded
    const form = document.getElementById('StudentForm');
    if (form) {
        form.addEventListener('submit', addStudent);
    } else {
        console.error('Form element not found');
    }

    function addStudent(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const subject = document.getElementById('subject').value;
        const grade = document.getElementById('grade').value;

        // Step 3: Constructor Function & Prototypes
        function Student(name, subject, grade) {
            this.name = name;
            this.subject = subject;
            this.grade = grade;
        }

        // Method to display student information
        Student.prototype.displayInfo = function() {
            return `${this.name} is studying ${this.subject} and scored ${this.grade}`;
        }

        // Create a new student object
        const student = new Student(name, subject, grade);
        students.push(student);

        // Display student list
        displayStudents();

        // Reset form
        form.reset();
    }

    // Step 4: Apply a Method to an Object Class Using a Prototype
    function displayStudents() {
        const studentList = document.getElementById('StudentList');
        studentList.innerHTML = '';

        students.forEach(function(student) {
            const li = document.createElement('li');
            li.textContent = student.displayInfo();
            studentList.appendChild(li);
        });
    }

    // Step 5: Create and Apply a Closure (Example)
    function privateExample() {
        let privateCounter = 0; // This is a private variable

        function changeBy(val) {
            privateCounter += val;
        }

        return {
            increment: function() {
                changeBy(1);
            },
            decrement: function() {
                changeBy(-1);
            },
            value: function() {
                return privateCounter;
            }
        };
    }

    const counter = privateExample();
    counter.increment();
    counter.increment();
    console.log(counter.value()); // 2

    // Step 6: Public, Private, and Privileged Methods
    function StudentWithPrivate(name, subject, grade) {
        this.name = name;
        this.subject = subject;

        let _grade = grade; // Private variable

        // Public method
        this.getGrade = function() {
            return _grade;
        }

        // Privileged method
        this.setGrade = function(newGrade) {
            if (newGrade >= 0 && newGrade <= 100) {
                _grade = newGrade;
            }
        }
    }

    const studentWithPrivate = new StudentWithPrivate('John Doe', 'Math', 85);
    console.log(studentWithPrivate.getGrade()); // 85
    studentWithPrivate.setGrade(90);
    console.log(studentWithPrivate.getGrade()); // 90
});
