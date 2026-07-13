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

function showConfirmDeletionMenu() {
    console.log(`
    Are you sure?

    1. Yes

    2. No        
        `)
}

function showSucsassfulMassege() {
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
        id: prompt("Enter Student ID: "),
        name: prompt("Enter Student Name: "),
        age: prompt("Enter Student Age: "),
        grade: prompt("Enter Student Grade: ")
    }
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

function deleteStudent(studentIndex) {
    students.splice(studentIndex, 1)
}

// Exit System Function

function exitSystem() {
    isExitSystem = true
}

function deleteConsole() {
    console.clear()
}

while (!isExitSystem) {
    deleteConsole()
    showMainMenu()
    switch (Number(getUserChoice())) {
        case 1:
            showStudentsMenu()
            switch (Number(getUserChoice())) {
                case 1:
                    deleteConsole()
                    console.log(`========= ADD STUDENT =========`)
                    addNewStudent(getNewStudentData())
                    showSucsassfulMassege()
                    break
                case 2:
                    deleteConsole()
                    showStudents(students)
                    break
                case 3:
                    deleteConsole()
                    showSearchMenu()
                    switch (Number(getUserChoice())) {
                        case 1:
                            deleteConsole()
                            showStudents([findStudentById(getStudentId())])
                            break
                        case 2:
                            deleteConsole()
                            showStudents(findStudentByName(getStudentName()))
                            break
                    }
                    break
                case 4:
                    deleteConsole()
                    let student = findStudentById(getStudentId())
                    console.log("Current Data")
                    showStudents([student])
                    updateStudent(student, getStudentUpdatedData())
                    break
                case 5:
                    deleteConsole()
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
            break
        case 3:
            exitSystem()
            break
    }

    prompt("Press Enter To Continue...  ")
}
