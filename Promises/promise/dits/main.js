$.get('/randomWord', function (word) {
    $.get(`/synonyms/${word}`, function (synonyms) {
        $.get(`/sentiment/${word}`, function (sentiment) {
            console.log(`
            The word ${word} has a 
            ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
            its synonyms are: ${synonyms}`)
        })
    })
})
