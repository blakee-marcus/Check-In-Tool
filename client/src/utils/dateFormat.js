const todaysDate = () => {
  const today = new Date();

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthName = months[today.getMonth()];
  const day = today.getDate();
  const year = today.getFullYear();

  const formattedDate = `${monthName} ${day}, ${year}`;

  return formattedDate;
};

export default todaysDate;
