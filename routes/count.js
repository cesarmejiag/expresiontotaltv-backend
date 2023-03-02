const { Router } = require("express");
const { count } = require("../controllers/count");
const router = Router();

router.get("/", count);

module.exports = router;
