module.exports = {
  format_time: (date) => {
    // Check if the date value is null or undefined
    if (!date) {
      return '';
    }

    // Format the date using toLocaleTimeString()
    return date.toLocaleTimeString();
  },
};
