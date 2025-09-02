const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const mathInput = document.getElementById('mathInput');
const JSInput = document.getElementById('JSInput');
const physicsInput = document.getElementById('physicsInput');
const addBtn = document.getElementById('addBtn');
const showAGrade = document.getElementById('showAGrade');
const sortTotal = document.getElementById('sortTotal');
const studentTable = document.getElementById('Studenttable');

// Array to store students
let students = [];

// Function to calculate grades
function calculateGrade(avg) {
    if (avg >= 90) return "A";
    else if (avg >= 75) return "B";
    else if (avg >= 60) return "C";
    else return "Fail";
}

// Function to render table
function renderTable(studentList) {
    studentTable.innerHTML = ""; 
    studentList.forEach(student => {
        const tr = document.createElement('tr');
        const total = student.math + student.JS + student.physics;
        const avg = total / 3;
        const grade = calculateGrade(avg);

        tr.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.math}</td>
            <td>${student.JS}</td>
            <td>${student.physics}</td>
            <td>${total}</td>
            <td>${avg.toFixed(2)}</td>
            <td class="grade-${grade}">${grade}</td>
        `;
        studentTable.appendChild(tr);
    });
}

// Add Student Button
addBtn.addEventListener('click', () => {
    const student = {
        name: nameInput.value,
        age: Number(ageInput.value),
        math: Number(mathInput.value),
        JS: Number(JSInput.value),
        physics: Number(physicsInput.value),
    };
    students.push(student);
    renderTable(students);

    // Clear inputs
    nameInput.value = '';
    ageInput.value = '';
    mathInput.value = '';
    JSInput.value = '';
    physicsInput.value = '';
});

// Show A Grade Students
showAGrade.addEventListener('click', () => {
    const aStudents = students.filter(s => 
        calculateGrade((s.math + s.JS + s.physics) / 3) === "A"
    );
    renderTable(aStudents);
});

// Sort by Total Marks
sortTotal.addEventListener('click', () => {
    const sorted = [...students].sort((a, b) => 
        (b.math + b.JS + b.physics) - (a.math + a.JS + a.physics)
    );
    renderTable(sorted);
});
