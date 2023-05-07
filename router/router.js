const express= require("express")
const controller=require("../controller/controller")
const router=express.Router()

router.get("/bollywood",controller.getbollywod)
router.get("/food",controller.getfood)
router.get("/fitness",controller.getfitness)
router.get("/hollywood",controller.gethollywood)
router.get("/technology",controller.gettechnology)

module.exports=router