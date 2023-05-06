//Creating token and saving in cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  //options for cookies

 

  res.status(statusCode).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
