module.exports = (timestamp) => {
  const dateObj = new Date(timestamp);

  const monthFormat = 'short';
  const formattedMonth = dateObj.toLocaleString('en-US', { month: monthFormat });
  const dayOfMonth = dateObj.getDate();
  const year = dateObj.getFullYear();

  // Formatting for hours, minutes, and AM/PM
  let hour = dateObj.getHours();
  const minute = String(dateObj.getMinutes()).padStart(2, '0');  // ensures minutes are two digits
  const periodOfDay = hour >= 12 ? 'pm' : 'am';

  if (hour > 12) hour -= 12;  // Convert from 24-hour to 12-hour format
  if (hour === 0) hour = 12;  // Adjust if hour is 0 (midnight) to display as 12

  return `${formattedMonth} ${dayOfMonth}, ${year}, ${hour}:${minute} ${periodOfDay}`;
};
