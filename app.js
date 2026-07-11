const prompt = require("prompt-sync")();

let isExitSystem = false
let students = []

function showMainMenu () {
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

function showStudentsMenu () {
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

function addStudent () {
    console.clear()
    console.log(`========= ADD STUDENT =========`)

    let studentId = prompt("Enter Student ID: ")
    let studentName = prompt("Enter Student Name: ")
    let studentAge = prompt("Enter Student Age: ")
    let studentGrade = prompt("Enter Student Grade: ")            
            
    let student = {
        id : studentId,
        name : studentName,
        age : studentAge,
        grade : studentGrade,
    }

    students.push(student)
    console.log(`
        ---------------------------------
           Student Added Successfully
        ---------------------------------  
    `)     
}

function viewStudents () {
    console.clear() 
    console.log("========== RESULT ==========")
    for (let i = 0; i < students.length; i++) {
        console.log(`
    ID : ${students[i].id}
    Name : ${students[i].name}
    Age : ${students[i].age}
    Grade : ${students[i].grade}
                    `)
    }    
}

function exitSystem () {
    isExitSystem = true 
}

while (true) {

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
                    viewStudents()
                    break
            }
        case 3:
            exitSystem()
            break
    }

    prompt("Press Enter To Continue...  ")
    console.clear()    
}
   