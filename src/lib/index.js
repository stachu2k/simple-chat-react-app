function convertLocalDateToUTCDate(date) {
  var newDate = new Date(date.getTime() + date.getTimezoneOffset()*60*1000);
  return newDate;   
}

function convertUTCDateToLocalDate(date) {
  var newDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
  return newDate;   
}

export {
  convertLocalDateToUTCDate,
  convertUTCDateToLocalDate 
};
