const handle = (req, res) => {
  console.log(req.app.locals.title);
  res.send("This is the About Page");
};

module.exports = handle;
