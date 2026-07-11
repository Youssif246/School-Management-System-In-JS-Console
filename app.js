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
    7. Filter Students
    8. Back            
                `)
}

function showSearchMenu() {
    console.log(`
========== SEARCH =========

1. Search By ID

2. Search By Name      
        `)
}

// Students Operation Functions

function addStudent() {
    console.clear()
    console.log(`========= ADD STUDENT =========`)

    let studentId = prompt("Enter Student ID: ")
    let studentName = prompt("Enter Student Name: ")
    let studentAge = prompt("Enter Student Age: ")
    let studentGrade = prompt("Enter Student Grade: ")

    let student = {
        id: studentId,
        name: studentName,
        age: studentAge,
        grade: studentGrade,
    }

    students.push(student)
    console.log(`
        ---------------------------------
           Student Added Successfully
        ---------------------------------  
        `)
}

function searchStudent(key) {
    const studentSearchValue = prompt(`Enter ${key}: `)
    return students.filter(function (student) {
        return student[key.toLowerCase()] === studentSearchValue
    })
}

function showStudents(searchedStudentsList) {
    console.clear()
    console.log(`========== RESULT ==========`)
    for (let i = 0; i < searchedStudentsList.length; i++) {
        console.log(`
        ID : ${searchedStudentsList[i].id}
        Name : ${searchedStudentsList[i].name}
        Age : ${searchedStudentsList[i].age}
        Grade : ${searchedStudentsList[i].grade}

----------------------------
                    `)
    }
}

function exitSystem() {
    isExitSystem = true
}

while (!isExitSystem) {
    
    showMainMenu()
    const welcomeChoice = prompt("Enter your choice: ");
    switch (Number(welcomeChoice)) {
        case 1:
            showStudentsMenu()
            const studentsMenuChoice = prompt("Enter your choice: ");
            switch (Number(studentsMenuChoice)) {
                case 1:
                    addStudent()
                    break
                case 2:
                    showStudents(students)
                    break
                case 3:
                    showSearchMenu()
                    const searchMethod = prompt("Choose: ")
                    switch (Number(searchMethod)) {
                        case 1:
                            const searchStudentResultsById =  searchStudent("ID")
                            showStudents(searchStudentResultsById)
                            break;
                        case 2:
                            const searchStudentResultsByName = searchStudent("Name")
                            showStudents(searchStudentResultsByName)
                            break;
                    }
                    
            }
            break
        case 3:
            exitSystem()
            break
    }

    prompt("Press Enter To Continue...  ")
    console.clear()
}
