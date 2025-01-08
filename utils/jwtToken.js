const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "None",
    maxAge: 3600000,
  };

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      message: "Authenticated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
};

module.exports = sendToken;
