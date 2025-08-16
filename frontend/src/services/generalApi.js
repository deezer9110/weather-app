 

export const getDateString = (timestamp, justTime = false) => {

  let options;

  if(justTime == true) {
    options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }
  } else {
    options = {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }
    }
  var date = new Date(timestamp*1000)
  var dateStr = date.toLocaleString("en-UK", options);
  return dateStr;
  }