var generateMessage =  (from , text) =>{
  return{
    from,
    text,
    createAt:  new Date().getTime()
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  return{
    from,
    url: `https://www.google.com/maps?q=${latitude}, ${longitude}`,
    createAt: new Date().getDate()
  };
};

module.exports = {generateMessage, generateLocationMessage};
