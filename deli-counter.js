// 1. Write your functions here

const katzDeli = []
function takeANumber(array, name){
  katzDeli.push(name)
  const newArray = [...katzDeli]
  const index = newArray.findIndex(nown => nown === name);
  console.log(`Welcome, ${name}. You are number ${(index + 1)} in line.`)
}


function line(array){
     let message = "The line is currently: "
     for(let i = 0; i < array.length; i++){
         message += [i + 1] + ". " + array[i] + " "
     }
     console.log(message)
}


function nowServing(array){
  console.log(`Currently serving ${array.shift(0)}.`)
}




// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"