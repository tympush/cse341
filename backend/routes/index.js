const router = require("express").Router();

router.use("/", require("./swagger"));

router.get("/", (req, res) => {
  //#swagger.tags = ['Contacts']
  res.send("Hello World!");
});

router.use("/contacts", require("./contacts"));

module.exports = router;
