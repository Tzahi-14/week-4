title = "Circle Utility";
const pi = 3.14159;

const calcCircleArea = function (radius) {
  return pi * radius * radius;
};

module.exports.pi = pi;
module.exports.calcCircleArea = calcCircleArea;

//In this case we're overwriting the entire exports objects - but since it is empty by default, that doesn't really matter.

// const dbName = "SQL_DB_1102"
// const dbPassword = "e3!accT"

// module.exports = {
//     dbName: dbName,
//     dbPassword: dbPassword
// }

