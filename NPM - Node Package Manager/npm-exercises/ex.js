// const valid = require('validator')
// //Ex. 1
// //Check whether "shoobert@dylan" is a valid email (should be false)

// //Ex. 2
// //Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale

// //Ex. 3
// //Use the following blacklist
// let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
// //Along with validator's `blacklist` method to clean this text:
// let text = "I'M SO EXCITED!!!~!"
// //Ultimately, it should print "im so excited"

// console.log(valid.isEmail("shoobert@dylan"));
// console.log(valid.isMobilePhone("786-329-9958","en-US"))
// console.log(valid.blacklist(text,blacklist).toLowerCase())

let faker = require("faker")

const makeHuman = function (number) {
 for (let i = 0; i < number; i++){
     console.log(faker.fake("{{name.firstName}}, {{image.avatar}}, {{company.companyName}}"))
 }
}
	makeHuman(4)


// makeHuman(2) //prints the following:
// Viola, https://s3.amazonaws.com/uifaces/faces/twitter/motionthinks/128.jpg, Donnelly - Feil
// Isaias, https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg, Wilkinson, Hickle and Hoppe
