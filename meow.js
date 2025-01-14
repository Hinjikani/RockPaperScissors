// const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// let admitted = [];
// let refused = [];
// let admittedOutput = "admitted: "
// let refusedOutput = "refused: "

// // loop starts here
// for (const name of people) {
//     if (name === "Phil" || name === "Lola") {
//         refused.push(name);
//     } else {
//         admitted.push(name);
//     }
// }

// for (let i = 0; i <= admitted.length -1; i++) {
//     if (i < admitted.length -1) {
//         admittedOutput += `${admitted[i]}, `
//     } else {
//         admittedOutput += `and ${admitted[i]}`
//     }
// }

// for (let i = 0; i <= refused.length -1; i++) {
//     if (i < refused.length -1) {
//         refusedOutput += `${refused[i]}, `
//     } else {
//         refusedOutput += `and ${refused[i]}`
//     }
// }


// console.log(refused);
// console.log(admitted);
// console.log(admittedOutput)
// console.log(refusedOutput)

// for (let i = 2; i<=10; i++) {
//     if (i % 2 == 1) continue;
//     alert(i)
// }

// let i = 0
// while (i<=100) {
//     i = prompt ("GIVE ME NUMBER!!! >:3c");
//     if (i>100) {
//         alert(`Your number is: ${i}\nIt's CORRECT!!! YAYYY!!!!`);
//         break;
//     } else {
//         alert(`Your number ${i} is wrong ❌`);
//         continue;
//     }
// }

let number = prompt("input your number: ")

main:while(true){
    for (i = 2; i < number; i++) {
        if (number%i == 0) {
            alert("this is not prime")
            break main;
        } else {
            continue
        }
    }
alert("this is prime");
break;
}