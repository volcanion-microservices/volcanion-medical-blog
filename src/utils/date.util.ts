const DateUtil = {
  formatDate: (isoDate: string): string => {
    if (isoDate.endsWith("Z")) isoDate = isoDate.replace("Z", "");
    const dateAndTime = isoDate.split("T");
    const date = dateAndTime[0];
    const time = dateAndTime[1];
    const timeParts = time.split(":");
    const hours = timeParts[0];
    const minutes = timeParts[1];
    const seconds = timeParts[2];
    const dateParts = date.split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    return `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
  },
}

export default DateUtil;
