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

// Get User Inputs

function getUserChoice() {
    return prompt("Enter your choice: ")
}

function getStudentId() {
    return prompt("Enter Student ID: ")
}

function getStudentName() {
    return prompt("Enter Student Name: ")
}

function getStudentUpdatedData() {
    const newName = prompt("Enter New Name: ")
    const newAge = prompt("Enter New Age: ")
    const newGrade = prompt("Enter New Grade: ")

    return { newName, newAge, newGrade }
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

function updateStudent(student, studentUpdateData) {
    student.name = studentUpdateData.newName
    student.age = studentUpdateData.newAge
    student.grade = studentUpdateData.newGrade
}

function findStudentById(studentId) {
    return students.find(function (student) {
        return student.id === studentId
    })
}

function findStudentByName(studentName) {
    return students.filter(function (student) {
        return studentname === studentName
    })
}

function showStudents(searchedStudentsList) {
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

// Exit System Function

function exitSystem() {
    isExitSystem = true
}

while (!isExitSystem) {

    showMainMenu()
    switch (Number(getUserChoice())) {
        case 1:
            showStudentsMenu()
            switch (Number(getUserChoice())) {
                case 1:
                    addStudent()
                    break
                case 2:
                    showStudents(students)
                    break
                case 3:
                    showSearchMenu()
                    switch (Number(getUserChoice())) {
                        case 1:
                            showStudents([findStudentById(getStudentId())])
                            break
                        case 2:
                            showStudents(findStudentByName(getStudentName()))
                            break
                    }
                    break
                case 4:
                    let student = findStudentById(getStudentId())
                    console.log("Current Data")
                    showStudents([student])
                    updateStudent(student, getStudentUpdatedData())
                    break

            }
            break
        case 3:
            exitSystem()
            break
    }

    prompt("Press Enter To Continue...  ")
    console.clear()
}
