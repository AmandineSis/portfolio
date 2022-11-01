const express = require("express");
const router = express.Router();

const projectCtrl = require("../controllers/projects");

router.get("/", projectCtrl.getAllProjects);
router.get("/:id", projectCtrl.getOneProject);

//router.post("/order", projectCtrl.orderProducts);

module.exports = router;
