const express = require("express")

const ScoreCtrl = require("../controllers/score-ctrl")

const router = express.Router()

router.post("/score",ScoreCtrl.createScore)
router.get("/score",ScoreCtrl.getScores)
router.delete("/score/:id",ScoreCtrl.deleteScore)


module.exports = router