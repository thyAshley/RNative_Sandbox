const app = require("express");
const router = app.Router();
const { requireAuth } = require("../controller/userController");
const trackController = require("../controller/trackController");

router.use(requireAuth);

router.get("/tracks", trackController.getTrack);
router.post("/tracks", trackController.addTrack);
module.exports = router;
