 

export const getDate = (timestamp) => {
  var date = new Date(timestamp*1000)
  var dateStr = date.toUTCString()
  console.log(dateStr)
  return dateStr;
  }