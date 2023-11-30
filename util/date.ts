export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  return `${day}.${month}.${year}`;
}

export function formatRelativeDate(inputDate: Date): string {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - inputDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    if (hoursDifference >= 1) {
      return `vor ${hoursDifference} Stunde${hoursDifference > 1 ? "n" : ""}`;
    } else {
      return "heute";
    }
  } else if (daysDifference === 1) {
    return "gestern";
  } else if (daysDifference <= 6) {
    return `vor ${daysDifference} Tagen`;
  } else if (daysDifference <= 30) {
    const weeksDifference = Math.floor(daysDifference / 7);
    return `vor ${weeksDifference} Woche${weeksDifference > 1 ? "n" : ""}`;
  } else {
    const monthsDifference = Math.floor(daysDifference / 30);
    return `vor ${monthsDifference} Monat${monthsDifference > 1 ? "en" : ""}`;
  }
}
