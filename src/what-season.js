const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const month = new Date(date).getMonth();
  let result = "";
  if (date === undefined) {
    result = "Unable to determine the time of year!";
  } else if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("Error");
  } else if (month >= 11 || month <= 1) {
    result = "winter";
  } else if (month >= 2 && month <= 4) {
    result = "spring";
  } else if (month >= 5 && month <= 7) {
    result = "summer";
  } else if (month >= 8 && month <= 10) {
    result = "autumn";
  }
  return result;
};
