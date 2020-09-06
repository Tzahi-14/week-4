const express = require('express')
const validator = require('validator')
const router = express.Router()

const wordCounter = {
    "hello": 4,
    "hey": 2,
    "dog": 5,
    "cat": 0
}

router.get('/sanity', function (req, res) {
    res.send("server up and running")
})

router.get('/word/:singleWord', function (req, res) {
    let wordInCounter = wordCounter[req.params.singleWord]
    if (wordInCounter) {
        res.send({ count: wordInCounter })
    }
    else {
        res.send({ count: 0 })

    }
})

router.post('/word/:singleWord', function (req, res) {
    let wordInCounter = wordCounter[req.params.singleWord]
    let single = req.params.singleWord
    if (wordInCounter) {
        wordInCounter++
    }
    else {
        wordInCounter = 1
        wordCounter[single] =1
    }
    res.send({ text: `Added ${req.params.singleWord}`, currentCount: { count: wordInCounter }, wordCounter})
})

router.post('/words/:sentence', function (req, res) {
    let sentence = req.params.sentence
    let numNewWords = 0
    let numOldWords = 0
    let arr = sentence.trim().split(" ")
    for (let a of arr) {
        let wordInCounter = wordCounter[a]
        if (wordCounter[req.params.a]) {
            wordInCounter++
            numOldWords++
        }
        else {
            wordInCounter = 1
            numNewWords++
        }
    }


    res.send({ text: `Added numNewWords: ${numNewWords} words, numOldWords: ${numOldWords} already existed.`})

})

router.get('/total', function (req, res) {
    let sum = 0
    let objToarr = Object.keys(wordCounter)
    for (let a of objToarr) {
        sum += wordCounter[a]
    }
    res.send({ text: "Total count", count: { sum } })
})

router.post('/validator/:sentence',function(req,res){
    // let numNewWords = 0
    // let numOldWords = 0
    let sentence = req.params.sentence
    let blacklist = ["!", "?", ".", "@", "~", ",", "'", "*"]
    let validatorSentence = validator.blacklist(sentence, blacklist).toLowerCase()
    console.log(validatorSentence)
    let arr = validatorSentence.trim().split(" ")
    for (let a of arr) {
        // let wordInCounter = wordCounter[a]
        // a = req.params.a
        if (wordCounter[a]) {
            wordCounter[a]++
            // numOldWords++
        }
        else {
            // wordInCounter = 1
            // numNewWords++
            wordCounter[a] = 1
        }
    }
    res.send(wordCounter)
})

module.exports = router
