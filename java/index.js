//1)document.getElementById("count-el").innerText = 5

//2)
//let nurba = 0

//console.log(nurba)

//3)
//let myAge = 17

//console.log(myAge)

//4)
//let uluk = 5 * 7

//console.log(uluk)

//5)
//let firstBatch = 5
//let secondBatch = 6
//let count = firstBatch + secondBatch

//console.log(count)

//6)
  //let humanDogRatio = 7
  //let myAge = 8

  //let myDogAge = humanDogRatio + myAge

  //console.log(myDogAge)

//7)
//let count = 5

//count = 3

//console.log(count)

//8) to make a button
//let count = 5

//count = count + 1

//console.log(count)

//9)
  //let  bonusPoints = 50

    //bonusPoints =  bonusPoints + 50

    //bonusPoints =  bonusPoints - 25

      //bonusPoints = bonusPoints + 75

      //console.log(bonusPoints)

//10)
//function increment() {
  //console.log("The button was clicked ")
//}

//11)
//function countdown() {
    //console.log(5)
    //console.log(4)
    //console.log(3)
    //console.log(2)
    //console.log(1)
//}
//countdown()

//12)
//function uluk(){
  //console.log(26)
//}
//uluk()

//13)
//let lap1 = 34
//let lap2 = 33
//let lap3 = 36

 //function lapsHolder() {
   //let multiLaps = lap1 + lap2 + lap3
  // console.log(multiLaps)
 //}
 //lapsHolder()

//14)
//let lapsCompleted = 0

  //function laps() {
  //  lapsCompleted = lapsCompleted + 1
//  }
 //laps()
 //laps()
 //laps()

//  console.log(lapsCompleted)

//15)

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
 count += 1
 countEl.innerText = count
}
function disincrement(){
  count -= 1
  countEl.innerText = count
}
function save(){
  countStr = count + " - "
  saveEl.textContent = saveEl.textContent + countStr
  count = 0
  countEl.innerText = count
}
//16)

/*let username = "per"

let /variable/ message = "You have tree new notifications" /string

console.log(message + " " + username + "!")

let messageToUser = message + " " + username + "!"

 console.log(messageToUs) */

//17)

//let name ="Uluk"

//let greeting = "Hi, my name is "

//let myGreeting = greeting + name

//console.log(myGreeting)



//18)

//let welcomeEl = document.getElementById("welcome-el")

//let name = "Toraliev Ulukbek"

//let greeting = "Welcome Page"

//welcomeEl.innerText = greeting + name

/*welcomeEl.innerText = welcomeEl.innerText + " 👋"*/
//welcomeEl.innerText += " 👋"

 
