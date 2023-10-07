const formatTime = (timestamp) => {
  const date = new Date(parseInt(timestamp));
  const hours = date.getHours().toString().padStart(2, '0');  // Get local hours
  const minutes = date.getMinutes().toString().padStart(2, '0');  // Get local minutes
  
  return `${hours}:${minutes}`;
};


export default formatTime;