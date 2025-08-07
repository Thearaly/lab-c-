// ===== HOMEWORK ASSIGNMENT =====
// Grade Calculator for 5 Subjects

console.log("=== Homework: Grade Calculator ===");

// TODO: Step 1 - Declare an array with 5 subject marks
let array = [90, 50, 50, 80, 90]
let sum = 0

// TODO: Step 2 - Loop through the array to compute the total
for (let i = 0; i< 5; i++){
    sum += array[i]
}
// TODO: Step 3 - Calculate average from the total
let avr = sum/5
// TODO: Step 4 - Use if-else to print the overall grade
if (avr >= 90) {
        console.log("Grade: A")
    } else if (avr >= 80) {
            console.log("Grade: B")
    } else if (avr >= 70) {
            console.log("Grade: C")
    } else {
       console.log("Grade: F")
    }
// Grade rules: A (90+), B (80–89), C (70–79), F (<70)
