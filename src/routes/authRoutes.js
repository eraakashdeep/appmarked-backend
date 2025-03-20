const express = require("express");
const {register,login} = require("../controllers/authController");
const router = express.Router();

router.get("/api/test", (req, res) => {
    res.json({ message: "API is working" });
  });
  
router.post("/register",register);
router.post("/login",login);

module.exports = router;