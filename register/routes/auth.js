const express = require("express");
const router = express.Router();

const regteach = require("../api/regteach");

router.get("/", (req, res) => {
  regteach(req, res);
});
router.get("/display", (req, res) => {
  regteach(req, res);
});
router.get("/search/:name", (req, res) => {
  regteach(req, res);
});
router.post("/save", (req, res) => {
  regteach(req, res);
});
router.put("/edit", (req, res) => {
  regteach(req, res);
});
router.delete("/delete", (req, res) => {
  regteach(req, res);
});

module.exports = router;
