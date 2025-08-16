 

export const getDateString = (timestamp) => {
  const options = {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }

  var date = new Date(timestamp*1000)
  var dateStr = date.toLocaleString("en-UK", options);
  return dateStr;
  }