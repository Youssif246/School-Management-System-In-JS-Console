const prompt = require("prompt-sync")();

let students = []

while (true) {
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

    Enter your choice:  
        `)
        
    const welcomeChoice = prompt("Enter your choice: ");

    switch (Number(welcomeChoice)) {
        case 1:
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
            break
    }

    const menuChoice = prompt("Enter your choice: ");

    switch (Number(menuChoice)) {
        case 1:
            console.clear()
            console.log(`========= ADD STUDENT =========`)

            var studentId = prompt("Enter Student ID: ")
            var studentName = prompt("Enter Student Name: ")
            var studentAge = prompt("Enter Student Age: ")
            var studentGrade = prompt("Enter Student Grade: ")            
            
            var student = {
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
                break
        
        case 2:
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

    prompt("Press Enter To Continue...  ")
    console.clear()    
}
   