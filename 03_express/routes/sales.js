const express = require("express");
const router = express.Router();

router.get("/", (req, resp) => {
  console.log("/상품의 root경로");
  resp.send("/상품의 root경로");
});
router.post("/insert", (req, resp) => {
  console.log("/insert 경로");
  resp.send("/insert 경로");
});

module.exports = router;
