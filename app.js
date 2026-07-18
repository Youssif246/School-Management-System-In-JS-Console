const prompt = require("prompt-sync")();

let isExitSystem = false
let students = []

// Show Menu Functions

function showMainMenu() {
    console.log(
        `
    ========================================
           SCHOOL MANAGEMENT SYSTEM
    ========================================

    Welcome!

    Choose an option:

    1. Students
    2. Statistics
    3. Exit 
        `)
}

function showStudentsMenu() {
    console.clear()
    console.log(`
    ========================================
                STUDENTS MENU
    ========================================

    1. Add Student
    2. Show All Students
    3. Search Student
    4. Update Student
    5. Delete Student
    6. Sort Students
    7. Back            
                `)
}

function showSearchMenu() {
    console.log(`
    ========== SEARCH =========

    1. Search By ID

    2. Search By Name      
        `)
}

function showSortMenu() {
    console.log(`
========================================
            SORT STUDENTS
========================================

1. Sort By Name (A → Z)
2. Sort By Grade (Highest First)
3. Sort By Grade (Lowest First)
4. Sort By Age (Youngest First)
5. Sort By Age (Oldest First)
6. Back        
        `)
}

function showStatistics(statistics) {
    console.log(`
========== STATISTICS ==========

Total Students : ${statistics.total}

Passed Students : ${statistics.passed}

Failed Students : ${statistics.failed}

Highest Grade : ${statistics.highest}

Lowest Grade : ${statistics.lowest}

Average Grade : ${statistics.average}        
        `)
}

function showConfirmDeletionMenu() {
    console.log(`
    Are you sure?

    1. Yes

    2. No        
        `)
}

function showStudentAddedSuccessMessage() {
    console.log(`
    ---------------------------------
         Student Added Successfully
    ---------------------------------  
        `)
}

// Get User Inputs

function getUserChoice() {
    return prompt("Enter your choice: ")
}

function getNewStudentData() {
    return {
        id: Number(prompt("Enter Student ID: ")),
        name: prompt("Enter Student Name: ").trim(),
        age: Number(prompt("Enter Student Age: ")),
        grade: Number(prompt("Enter Student Grade: "))
    }
}

function getStudentId() {
    return prompt("Enter Student ID: ")
}

function getStudentName() {
    return prompt("Enter Student Name: ")
}

function getStudentUpdatedData() {
    const newName = prompt("Enter New Name: ").trim()
    const newAge = Number(prompt("Enter New Age: "))
    const newGrade = Number(prompt("Enter New Grade: "))

    return { newName, newAge, newGrade }
}

// Students Inputs Validation

function validateStudentData(student) {
    return (
        student.id > 0 &&
        student.name !== '' &&
        student.age > 0 &&
        student.grade >= 0 &&
        student.grade <= 100
    )
}

// Students Operation Functions

function addNewStudent(newStudent) {
    students.push(newStudent)
}

function updateStudent(student, studentUpdateData) {
    student.name = studentUpdateData.newName
    student.age = studentUpdateData.newAge
    student.grade = studentUpdateData.newGrade
}

function findStudentById(studentId) {
    return students.find((student) => student.id === studentId)
}

function findStudentIndexById(studentId) {
    return students.findIndex((student) => student.id === studentId)
}

function findStudentByName(studentName) {
    return students.filter((student) => student.name === studentName)
}

function sortStudentsByNumbers(sortMethod, sortOrder) {
    return students.toSorted(function (a, b) {
        return sortOrder === "desc" ?
            b[sortMethod] - a[sortMethod] :
            a[sortMethod] - b[sortMethod]
    })
}

function sortStudentsByStrings() {
    return students.toSorted((a, b) => a.name.localeCompare(b.name))
}

function countAllStudents(students) {
    return students.length
}

function calculateHighestGrade(students) {
    let highestGrade = students[0].grade

    for (let index = 1; index < students.length; index++) {
        if (students[index].grade > highestGrade) {
            highestGrade = students[index].grade
        }
    }

    return highestGrade
}

function calculateLowestGrade(students) {
    let lowestGrade = students[0].grade

    for (let index = 1; index < students.length; index++) {
        if (students[index].grade < lowestGrade) {
            lowestGrade = students[index].grade
        }
    }

    return lowestGrade
}

function calculateAverageGrade(students) {
    let gradesSum = students.reduce(function (acc, curr) {
        return acc + curr.grade
    }, 0)

    return gradesSum / students.length
}

function countPassedStudents(students) {
    return students.filter((student) => student.grade > 50).length
}

function countFailedStudents(students) {
    return students.filter((student) => student.grade < 50).length
}

function initStatistics(students) {
    return {
        total: countAllStudents(students),
        passed: countPassedStudents(students),
        failed: countFailedStudents(students),
        highest: calculateHighestGrade(students),
        lowest: calculateLowestGrade(students),
        average: calculateAverageGrade(students)
    }
}

function showStudents(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(`
        ID : ${students[i].id}
        Name : ${students[i].name}
        Age : ${students[i].age}
        Grade : ${students[i].grade}

----------------------------
                    `)
    }
}

function deleteStudent(studentIndex) {
    students.splice(studentIndex, 1)
}

// Handle User Workflow

function handleMainMenu() {
    clearConsole()
    showMainMenu()
    switch (Number(getUserChoice())) {
        case 1:
            handleStudentsMenu()
            break
        case 2:
            clearConsole()
            showStatistics(initStatistics(students))
            break
        case 3:
            exitSystem()
            break
    }
}

function handleStudentsMenu() {
    showStudentsMenu()
    switch (Number(getUserChoice())) {
        case 1:
            handleAddStudent()
            break
        case 2:
            clearConsole()
            showStudents(students)
            break
        case 3:
            handleSearchStudents()
            break
        case 4:
            handleUpdateStudent()
            break
        case 5:
            handleDeleteStudent()
            break
        case 6:
            handleSortStudents()
            break
        case 7:
            break    
    }
}

function handleAddStudent() {
    clearConsole()
    console.log(`========= ADD STUDENT =========`)
    const student = getNewStudentData();

    if (validateStudentData(student)) {
        addNewStudent(student);
        showStudentAddedSuccessMessage();
    } else {
        console.log("\nYour Inputs Is Not Valid Please Check It Again")
    }
}

function handleSearchStudents() {
    clearConsole()
    showSearchMenu()
    switch (Number(getUserChoice())) {
        case 1:
            clearConsole()
            showStudents([findStudentById(getStudentId())])
            break
        case 2:
            clearConsole()
            showStudents(findStudentByName(getStudentName()))
            break
    }
}

function handleUpdateStudent() {
    clearConsole()
    let student = findStudentById(getStudentId())
    console.log("Current Data")
    showStudents([student])
    updateStudent(student, getStudentUpdatedData())
}

function handleSortStudents() {
    clearConsole()
    showSortMenu()
    switch (Number(getUserChoice())) {
        case 1:
            clearConsole()
            showStudents(sortStudentsByStrings())
            break;
        case 2:
            clearConsole()
            showStudents(sortStudentsByNumbers("grade", "desc"))
            break;
        case 3:
            clearConsole()
            showStudents(sortStudentsByNumbers("grade", "asc"))
            break;
        case 4:
            clearConsole()
            showStudents(sortStudentsByNumbers("age", "asc"))
            break;
        case 5:
            clearConsole()
            showStudents(sortStudentsByNumbers("age", "desc"))
            break;
    }
}

function handleDeleteStudent() {
    clearConsole()
    let studentId = getStudentId()
    showConfirmDeletionMenu()
    switch (Number(getUserChoice())) {
        case 1:
            deleteStudent(findStudentIndexById(studentId))
            break
        case 2:
            break
    }
}

// Exit System Function

function exitSystem() {
    isExitSystem = true
}

function clearConsole() {
    console.clear()
}

while (!isExitSystem) {
    handleMainMenu()
    prompt("Press Enter To Continue...  ")
}
