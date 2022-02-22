let d;
function dateInfo() {
    d = new Date();
    const newDate = d.getDate();
    return newDate;
}
console.log(dateInfo());


function month() {
    const currentMonth = d.getMonth();
    return currentMonth;
}
console.log(month());

function batchInfo() {
    var batchName ="Thorium";
    var week = "W3";
    var day = "01";
    var infoBatch = ""+batchName+" #"+week +day+"the topic for today is nodejs module"
    return infoBatch
}
console.log(batchInfo());

module.exports.varNew = d;
module.exports.dateInfo = dateInfo;
module.exports.month = month;
module.exports.batchInfo = batchInfo;