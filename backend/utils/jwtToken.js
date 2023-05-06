//Creating token and saving in cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  //options for cookies
  axios.post('https://mern-stack-ecommerce-ahfo.onrender.com/api/v1/login', {
    // Your request payload
  })
    .then((res) => {
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        // Continue with your application logic
      } else {
        console.log("Cannot save token");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
 

  res.status(statusCode).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
