let money = 800

let itemPrice = 120
let checkChairPrice = function () {
    $.get(`priceCheck/chair`, function (storeData) {
        if (itemPrice > storeData.priceObj.price){
            console.log("buy item")
        }
        else{
            console.log("wait the price drop down")
        }
    })
}
// setInterval(checkChairPrice, 3000);


const hasEnoguhMoney = function (furniture) {
    let input = $("#search-input").val()
    $.get(`priceCheck/${input}`, function (storeData) {
        if (storeData.priceObj.name === furniture && storeData.priceObj.price <= money) {
            console.log("you can buy")
            money -= storeData.priceObj.price
            console.log(money)
            return true
        }
        else {
            console.log("find a job");
            $(".container").append(`<div>find a job or buy other item</div>`)
            return false
        }
    })
}

$("#search-btn").on("click", function () {
    if (!hasEnoguhMoney()) {
        return
    }
    let input = $("#search-input").val()
    $.get(`priceCheck/${input}`, function (storeData) {
        $(".container").append(`<div>${storeData.priceObj.price} ${storeData.nameObj.name}</div>`)
        console.log(storeData.priceObj.price)
        console.log(storeData.nameObj.name)
        console.log(storeData)
    })
})

$("#buy-btn").on("click", function () {
    let buyInput = $("#buy-input").val()
    $.get(`buy/${buyInput}`, function (inventoryData) {
        $(".container").append(`<div> ${inventoryData}</div>`)
    })
})

$("#sale-btn").on("click", function () {
    $.get(`sale/?admin=true`, function (store) {
        console.log(store)
        for (let a of store) {
            $(".container").append(`<div> you can buy ${a.name} we have ${a.inventory} of those, the price is ${a.price} just today, just today</div>`)

        }
    })
})




