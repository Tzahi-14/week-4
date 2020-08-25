const constsF = require ('./consts')


const handleComplaints = function (complaint) {
    if (complaint.type === constsF.complaints.FINANCE) {
        console.log("Money doesn't grow on trees, you know.")
    }
    else if (complaint.type === constsF.complaints.WEATHER) {
        console.log("It is the way of nature. Not much to be done.")
    }
    else {
        console.log("It'll pass, as all things do, with time.");
    }
}
// handleComplaints({text:"fhhg",type: constsF.WEATHER})

module.exports.handleComplaint = handleComplaints